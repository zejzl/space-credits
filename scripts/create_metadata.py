"""
Create Metaplex Token Metadata for Space Credits (v2 - correct borsh serialization)
"""
import json
import struct
from pathlib import Path
from solders.keypair import Keypair
from solders.pubkey import Pubkey
from solders.instruction import Instruction, AccountMeta
from solders.transaction import Transaction
from solana.rpc.api import Client

RPC_URL = "https://api.mainnet-beta.solana.com"
KEYPAIR_PATH = Path.home() / ".solana" / "space-credits-keypair.json"
TOKEN_MINT = Pubkey.from_string("B7Wz6HcG3XoYEqPUYmLu97gHMk4xifVRr6J3bJZ9u9Aj")

TOKEN_NAME = "Space Credits"
TOKEN_SYMBOL = "SPACE"
TOKEN_URI = "https://space-credits.com/metadata.json"

METADATA_PROGRAM_ID = Pubkey.from_string("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s")
SYSTEM_PROGRAM = Pubkey.from_string("11111111111111111111111111111111")
SYSVAR_RENT = Pubkey.from_string("SysvarRent111111111111111111111111111111111")


def get_metadata_pda(mint: Pubkey) -> Pubkey:
    seeds = [b"metadata", bytes(METADATA_PROGRAM_ID), bytes(mint)]
    pda, _ = Pubkey.find_program_address(seeds, METADATA_PROGRAM_ID)
    return pda


def pack_string(s: str) -> bytes:
    """Borsh string: u32 length prefix + utf8 bytes"""
    encoded = s.encode("utf-8")
    return struct.pack("<I", len(encoded)) + encoded


def create_metadata_v3_instruction(
    metadata_account: Pubkey,
    mint: Pubkey,
    mint_authority: Pubkey,
    payer: Pubkey,
    update_authority: Pubkey,
    name: str,
    symbol: str,
    uri: str,
) -> Instruction:
    """Build CreateMetadataAccountV3 instruction with correct borsh serialization."""
    data = bytearray()

    # Discriminator: CreateMetadataAccountV3 = 33
    data.append(33)

    # === DataV2 struct ===
    # name: String
    data.extend(pack_string(name))
    # symbol: String
    data.extend(pack_string(symbol))
    # uri: String
    data.extend(pack_string(uri))
    # seller_fee_basis_points: u16
    data.extend(struct.pack("<H", 0))
    # creators: Option<Vec<Creator>> = None
    data.append(0)
    # collection: Option<Collection> = None
    data.append(0)
    # uses: Option<Uses> = None
    data.append(0)

    # === End DataV2 ===

    # is_mutable: bool
    data.append(1)

    # collection_details: Option<CollectionDetails> = None
    data.append(0)

    accounts = [
        AccountMeta(pubkey=metadata_account, is_signer=False, is_writable=True),
        AccountMeta(pubkey=mint, is_signer=False, is_writable=False),
        AccountMeta(pubkey=mint_authority, is_signer=True, is_writable=False),
        AccountMeta(pubkey=payer, is_signer=True, is_writable=True),
        AccountMeta(pubkey=update_authority, is_signer=False, is_writable=False),
        AccountMeta(pubkey=SYSTEM_PROGRAM, is_signer=False, is_writable=False),
        AccountMeta(pubkey=SYSVAR_RENT, is_signer=False, is_writable=False),
    ]

    return Instruction(METADATA_PROGRAM_ID, bytes(data), accounts)


def main():
    with open(KEYPAIR_PATH) as f:
        secret_key = json.load(f)
    keypair = Keypair.from_bytes(bytes(secret_key))

    client = Client(RPC_URL)
    balance = client.get_balance(keypair.pubkey())
    print(f"Wallet: {keypair.pubkey()}")
    print(f"Balance: {balance.value / 1e9:.6f} SOL")

    metadata_pda = get_metadata_pda(TOKEN_MINT)
    print(f"\nToken Mint: {TOKEN_MINT}")
    print(f"Metadata PDA: {metadata_pda}")
    print(f"Name: {TOKEN_NAME}")
    print(f"Symbol: {TOKEN_SYMBOL}")
    print(f"URI: {TOKEN_URI}")

    ix = create_metadata_v3_instruction(
        metadata_account=metadata_pda,
        mint=TOKEN_MINT,
        mint_authority=keypair.pubkey(),
        payer=keypair.pubkey(),
        update_authority=keypair.pubkey(),
        name=TOKEN_NAME,
        symbol=TOKEN_SYMBOL,
        uri=TOKEN_URI,
    )

    blockhash_resp = client.get_latest_blockhash()
    recent_blockhash = blockhash_resp.value.blockhash

    tx = Transaction.new_signed_with_payer(
        [ix],
        keypair.pubkey(),
        [keypair],
        recent_blockhash,
    )

    print("\nSending transaction...")
    result = client.send_transaction(tx)
    print(f"Signature: {result.value}")
    print(f"\nMetadata created successfully!")
    print(f"View on Solscan: https://solscan.io/token/{TOKEN_MINT}")


if __name__ == "__main__":
    main()
