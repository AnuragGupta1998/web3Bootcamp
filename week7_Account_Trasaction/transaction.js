import { Connection,Keypair,clusterApiUrl,Transaction, SystemProgram,LAMPORTS_PER_SOL, sendAndConfirmTransaction, PublicKey } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

const payer = Keypair.fromSecretKey(Uint8Array.from([
    187, 149, 85, 11, 16, 43, 109, 130, 183, 30, 206, 97, 21, 179, 222, 32, 218,
    247, 40, 102, 81, 117, 185, 147, 79, 4, 186, 90, 167, 234, 107, 22, 115, 5,
    132, 76, 60, 64, 161, 177, 82, 23, 14, 13, 185, 48, 130, 189, 202, 72, 78,
    177, 130, 86, 0, 185, 233, 59, 160, 117, 52, 113, 156, 214,
  ]));

  const to = Keypair.generate();
//   const to = new PublicKey("");   //to import publikey of wallet
  console.log(to.publicKey.toBase58());
  console.log(to.secretKey)   ;

//   const transaction = new Transaction();

//   transaction.add(
//     SystemProgram.transfer({
//         fromPubkey: payer.publicKey,
//         toPubkey  : to,
//         lamports: LAMPORTS_PER_SOL,
//     }),
//   );
   
//   await sendAndConfirmTransaction(connection,transaction,[payer]);

//   const balance = await connection.getBalance(to);
//   console.log(balance/LAMPORTS_PER_SOL);

//   const payerBalance = await connection.getBalance(payer.publicKey);
//   console.log(payerBalance/LAMPORTS_PER_SOL);

