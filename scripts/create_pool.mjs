/**
 * Create Meteora DLMM Launch Pool for Space Credits
 * - Pairs SPACE/SOL
 * - Anti-sniper: high initial fees that decay over time
 * - 300M SPACE + 1 SOL initial liquidity
 */
import { Connection, Keypair, PublicKey, sendAndConfirmTransaction } from '@solana/web3.js';
import DLMM from '@meteora-ag/dlmm';
import { BN } from 'bn.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Config
const RPC_URL = 'https://api.mainnet-beta.solana.com';
const KEYPAIR_PATH = path.join(process.env.USERPROFILE || process.env.HOME, '.solana', 'space-credits-keypair.json');

const SPACE_MINT = new PublicKey('B7Wz6HcG3XoYEqPUYmLu97gHMk4xifVRr6J3bJZ9u9Aj');
const SOL_MINT = new PublicKey('So11111111111111111111111111111111111111112'); // Wrapped SOL

// Pool parameters
const BIN_STEP = 100; // 1% per bin - good for volatile memecoin
const FEE_BPS = 500;  // 5% base fee (high to deter snipers, can be reduced later)

async function main() {
  // Load keypair
  const secretKey = JSON.parse(fs.readFileSync(KEYPAIR_PATH, 'utf8'));
  const wallet = Keypair.fromSecretKey(Uint8Array.from(secretKey));
  console.log(`Wallet: ${wallet.publicKey.toBase58()}`);

  // Connect
  const connection = new Connection(RPC_URL, 'confirmed');
  const balance = await connection.getBalance(wallet.publicKey);
  console.log(`Balance: ${balance / 1e9} SOL`);

  // Calculate active bin ID for initial price
  // With bin step of 100 (1%), active bin determines starting price
  // We want price ~ 1 SOL / 300M SPACE = 0.00000000333 SOL per SPACE
  // bin_id = log(price) / log(1 + binStep/10000) + 8388608
  // For very small prices, the bin ID will be well below the center (8388608)
  const pricePerToken = 1.0 / 300_000_000; // 1 SOL for 300M tokens
  const binStepDecimal = BIN_STEP / 10000; // 0.01
  const binId = Math.floor(Math.log(pricePerToken) / Math.log(1 + binStepDecimal)) + 8388608;
  console.log(`\nPool Parameters:`);
  console.log(`  Bin Step: ${BIN_STEP} (${binStepDecimal * 100}%)`);
  console.log(`  Fee: ${FEE_BPS} bps (${FEE_BPS / 100}%)`);
  console.log(`  Active Bin ID: ${binId}`);
  console.log(`  Initial Price: ~${pricePerToken.toExponential(4)} SOL/SPACE`);

  // Get current slot for activation (activate immediately)
  const slot = await connection.getSlot();
  const activationPoint = new BN(slot + 10); // activate ~5 seconds from now
  console.log(`  Current Slot: ${slot}`);
  console.log(`  Activation Slot: ${activationPoint.toString()}`);

  console.log(`\nStep 1: Creating DLMM pool...`);
  
  try {
    const createPoolTx = await DLMM.createCustomizablePermissionlessLbPair(
      connection,
      new BN(BIN_STEP),
      SPACE_MINT,        // Token X (the token we're launching)
      SOL_MINT,          // Token Y (SOL as quote)
      new BN(binId),     // Active bin (determines initial price)
      new BN(FEE_BPS),   // Fee in basis points
      { slot: {} },      // ActivationType.Slot
      false,             // No alpha vault
      wallet.publicKey,
      activationPoint,
      true,              // Creator can toggle pool on/off
    );

    console.log('Signing and sending pool creation transaction...');
    const sig = await sendAndConfirmTransaction(connection, createPoolTx, [wallet], {
      commitment: 'confirmed',
      skipPreflight: true,
    });
    console.log(`Pool created! Signature: ${sig}`);

    // Find the pool address
    console.log('\nStep 2: Finding pool address...');
    const pools = await DLMM.getLbPairs(connection, {
      tokenXMint: SPACE_MINT,
      tokenYMint: SOL_MINT,
    });
    
    if (pools.length > 0) {
      const pool = pools[0];
      console.log(`Pool address: ${pool.publicKey.toBase58()}`);
      console.log(`\nPool created successfully!`);
      console.log(`View on Meteora: https://app.meteora.ag/dlmm/${pool.publicKey.toBase58()}`);
    }

  } catch (err) {
    console.error('Error creating pool:', err.message || err);
    if (err.logs) {
      console.error('Logs:', err.logs);
    }
  }
}

main().catch(console.error);
