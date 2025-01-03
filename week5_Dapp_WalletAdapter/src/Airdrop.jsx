import React from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";


function Airdrop() {
  //wallet.publicKey.toBase58() gives public key of wallet
  const{ publicKey} = useWallet();

  //  this use to connect with wallet using their public  key
  const { connection } = useConnection();
  const[inputValue, setInputValue] = React.useState("");

  async function airdropUser(){
    console.log("input",inputValue)
     
    await connection.requestAirdrop(publicKey,inputValue*1000000000);
    alert("airdrop done")
  }


  return (
    <div className="mt-5 flex justify-center gap-1">
      <input
        type="text"
        placeholder="SOL to airdrop"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border border-black w-1/6 p-1 rounded-lg"
      />
      <button
        type="button"
        onClick={airdropUser}
        className="bg-blue-700 rounded-lg p-1 text-white font-bold"
      >
        Airdrop sol
      </button>
    </div>
  );
}

export default Airdrop;
