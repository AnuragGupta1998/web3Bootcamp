
import { Connection,Keypair,clusterApiUrl,LAMPORTS_PER_SOL,Transaction,sendAndConfirmRawTransaction, SystemProgram, sendAndConfirmTransaction } from "@solana/web3.js";


const conn = new Connection(clusterApiUrl("devnet"),"confirmed"); 

const account1 = Keypair.generate();
console.log("account1 publicKey",account1.publicKey.toBase58());

// console.log("account1 secret",account1.secretKey);
// const payer= Keypair.fromSecretKey(Uint8Array.from([
//     118, 160,  56, 156, 241, 183, 150, 153, 232,  53,  30,
//     165,  65, 116, 136,  46, 124,  67,   5, 170, 205,  14,
//     225, 154, 243, 226, 126, 231, 173,  20, 144,  47, 171,
//      89,  74,  59, 237,  77,  73, 237,  18, 161,  74,   2,
//      11, 232,  20, 213,  30,  38, 166,  95,  19, 128,  55,
//      55,  24, 172, 249, 189, 112,  59, 126,  15
//   ]));
// console.log("secret",payer.secretKey)
// console.log("payer publicKey",payer.publicKey.toBase58());

const account2 = Keypair.generate();
console.log("account2 publicKey",account2.publicKey.toBase58());

const doneAirdrop = await conn.requestAirdrop(account1.publicKey, 3*1000000000);

await conn.confirmTransaction({signature:doneAirdrop});
console.log("airdrop done");

const balance1 = await conn.getBalance(account1.publicKey);
console.log("account1 balance ",balance1/LAMPORTS_PER_SOL);

const transaction = new Transaction().add(
    SystemProgram.transfer({
        fromPubkey: account1.publicKey,
        toPubkey  : account2.publicKey,
        lamports  : 1000000000,
    })  
)
// await conn.confirmTransaction(transaction,[account1]);
await sendAndConfirmTransaction(conn,transaction,[account1])

const balance2 = await conn.getBalance(account2.publicKey);
console.log("account2 balance ",balance2/LAMPORTS_PER_SOL);



