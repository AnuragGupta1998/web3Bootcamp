import { useWallet,useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

import React from "react";

function AirdropSol() {
  const { connection } = useConnection();
  const wallet = useWallet();
  const pubKey = wallet.publicKey;
  const [amount, setAmount] = React.useState('');
 
  async function airdropSol() {
    console.log("airdrop function")
   try {
     if (!pubKey) {
       alert("Connect Wallet First");
       return;
     }
     await connection.requestAirdrop(pubKey,amount*LAMPORTS_PER_SOL);
     setAmount('');
    
     alert("Airdrop Successful");
   } catch (error) {
     console.log(error); 
   }
  }
  return (
    <>
    <h1 className="font-bold font-mono text-2xl mt-20 bg-black text-cyan-200 underline">SOLANA AIRDROP</h1>

    <div className="w-full h-52 bg-black flex justify-center rounded-lg gap-10"> 
      <input
        type="text"
        value={amount}
        placeholder=" Amount in SOL "
        onChange={(e) => setAmount(e.target.value)}
        className="border border-black rounder w-1/2 bg-green-300 h-16 rounded-lg mt-10 font-bold text-2xl font-mono"
      />

      <button
        type="button"
        className="bg-blue-500 h-16 text-2xl rounded-lg mt-10 px-5 font-bold font-mono hover:bg-blue-700 hover:text-cyan-200"
        onClick={airdropSol}
      >
        Airdrop Sol
      </button>
    </div>
    </>
  );
}

export default AirdropSol;
