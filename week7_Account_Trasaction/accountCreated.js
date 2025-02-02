import { sign } from "@noble/ed25519";
import{Keypair,Connection,LAMPORTS_PER_SOL,clusterApiUrl} from "@solana/web3.js"

//connect to devnet cluster
const connection=new Connection(clusterApiUrl("devnet"),"confirmed");

//account creation method

//1 method from Keypair.generate() function
const account=Keypair.generate();

console.log(account.publicKey.toBase58());
console.log(account.secretKey);

//airdrop to wallet from devnet
async function airdrop(pub){
   const confirmAirdrop = await connection.requestAirdrop(pub,10);
   await connection.confirmTransaction({signature:confirmAirdrop});
}
airdrop(account.publicKey);

const balance = await connection.getBalance(account.publicKey);
console.log(balance/LAMPORTS_PER_SOL);

