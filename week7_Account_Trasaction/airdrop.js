// import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
// const suppliedPublicKey = process.argv[2];
// if (!suppliedPublicKey) {
//   throw new Error("Provide a public key to check the balance of!");
// }

// const connection = new Connection("https://api.devnet.solana.com", "confirmed");

// const publicKey = new PublicKey(suppliedPublicKey);

// const balanceInLamports = await connection.getBalance(publicKey);

// const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

// console.log(
//   `✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`,
// );

import {
  Keypair,
  Connection,
  clusterApiUrl,
  PublicKey,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";

// const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const con = new Connection(clusterApiUrl("devnet"), "confirmed");

const payer = Keypair.fromSecretKey(
  Uint8Array.from([
    187, 149, 85, 11, 16, 43, 109, 130, 183, 30, 206, 97, 21, 179, 222, 32, 218,
    247, 40, 102, 81, 117, 185, 147, 79, 4, 186, 90, 167, 234, 107, 22, 115, 5,
    132, 76, 60, 64, 161, 177, 82, 23, 14, 13, 185, 48, 130, 189, 202, 72, 78,
    177, 130, 86, 0, 185, 233, 59, 160, 117, 52, 113, 156, 214,
  ])
);
// const key = "8jzmLAd7u4gdfHpVWzk123zW84GyzAdwpbMfZn5KxDau";
const key = payer.publicKey.toBase58();
console.log(key)

console.log(payer.publicKey.toBase58());

const airdroped = await con.requestAirdrop(new PublicKey(key), 2000000000);
await con.confirmTransaction({ signature: airdroped });

const balance = (await con.getBalance(new PublicKey(key))) / LAMPORTS_PER_SOL;
console.log(balance);

