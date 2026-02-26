/**
 * Create Meteora DLMM Launch Pool for Space Credits
 * - Pairs SPACE/SOL  
 * - Anti-sniper: high initial fees
 * - 300M SPACE + 1 SOL initial liquidity
 */
const { Connection, Keypair, PublicKey, sendAndConfirmTransaction } = require('@solana/web3.js');
const BN = require('bn.js');
const fs = require('fs');
const path = require('path');

// Config
const RPC_URL = 'https://api.mainnet-beta.solana.com';
const KEYPAIR_PATH = path.join(process.env.USERPROFILE || process.env.HOME, '.solana', 'space-credits-keypair.json');

const SPACE_MINT = new PublicKey('B7Wz6HcG3XoYEqPUYmLu97gHMk4xifVRr6J3bJZ9u9Aj');
const SOL_MINT = new PublicKey('So11111111111111111111111111111111111111112');

const BIN_STEP = 100;
const FEE_BPS = 500;

async function main() {
  // Dynamic import for ESM-only module
  const DLMM = (await import('@meteora-ag/dlmm')).default;

  const secretKey = JSON.parse(fs.readFileSync(KEYPAIR_PATH, 'utf8'));
  const wallet = Keypair.fromSecretKey(Uint8Array.from(secretKey));
  console.log(`Wallet: ${wallet.publicKey.toBase58()}`);

  const connection = new Connection(RPC_URL, 'confirmed');
  const balance = await connection.getBalance(wallet.publicKey);
  console.log(`Balance: ${balance / 1e9} SOL`);

  const pricePerToken = 1.0 / 300_000_000;
  const binStepDecimal = BIN_STEP / 10000;
  const binId = Math.floor(Math.log(pricePerToken) / Math.log(1 + binStepDecimal)) + 8388608;
  
  console.log(`\nPool Parameters:`);
  console.log(`  Bin Step: ${BIN_STEP} (${binStepDecimal * 100}%)`);
  console.log(`  Fee: ${FEE_BPS} bps (${FEE_BPS / 100}%)`);
  console.log(`  Active Bin ID: ${binId}`);
  console.log(`  Initial Price: ~${pricePerToken.toExponential(4)} SOL/SPACE`);

  const slot = await connection.getSlot();
  const activationPoint = new BN(slot + 20);
  console.log(`  Current Slot: ${slot}`);
  console.log(`  Activation Slot: ${activationPoint.toString()}`);

  console.log(`\nCreating DLMM pool...`);
  
  try {
    const createPoolTx = await DLMM.createCustomizablePermissionlessLbPair(
      connection,
      new BN(BIN_STEP),
      SPACE_MINT,
      SOL_MINT,
      new BN(binId),
      new BN(FEE_BPS),
      { slot: {} },
      false,
      wallet.publicKey,
      activationPoint,
      true,
    );

    console.log('Signing and sending transaction...');
    const sig = await sendAndConfirmTransaction(connection, createPoolTx, [wallet], {
      commitment: 'confirmed',
      skipPreflight: true,
    });
    console.log(`\nPool created! Signature: ${sig}`);
    console.log(`Check on Solscan: https://solscan.io/tx/${sig}`);
    
  } catch (err) {
    console.error('Error:', err.message || err);
    if (err.logs) console.error('Logs:', err.logs);
  }
}

main().catch(console.error);
