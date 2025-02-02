import React from "react";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect } from "react";

 function SolBalance() {
    const wallet = useWallet();
    const{connection}=useConnection();
    const[balance,setBalance]=React.useState();

    async function displayBalance(){
        if(wallet.publicKey){
            const bal = await connection.getBalance(wallet.publicKey);
            // console.log(bal/LAMPORTS_PER_SOL);
            setBalance(bal/LAMPORTS_PER_SOL);
        }
    }
    displayBalance();

    // useEffect(() => {
    //   displayBalance();
      
    // }, [wallet.publicKey]);


  return (
    <div className="w-full bg-black text-gray-100 flex justify-end rounded-lg p-4">
      {/* <p>solana wallet address <span className="font-bold font-mono px-2 "> {wallet.publicKey?.toBase58()}  </span> </p> */}
      <h1 className="font-mono font-bold px-2">Wallet Bal  {balance} SOL </h1>
    </div>
  );
}

export default SolBalance;
