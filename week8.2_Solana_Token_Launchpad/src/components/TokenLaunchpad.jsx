import React from "react";
import {useConnection,useWallet}  from "@solana/wallet-adapter-react"
import { Keypair,SystemProgram,Transaction } from "@solana/web3.js";
import { getMinimumBalanceForRentExemptMint, MINT_SIZE, TOKEN_PROGRAM_ID, createInitializeMint2Instruction } from "@solana/spl-token";


function TokenLaunchpad() {
  // const [name, setName] = React.useState("");
  // const [symbol, setSymbol] = React.useState("");
  // const [imageUrl, setImageUrl] = React.useState("");
  // const [initialSupply, setInitialSupply] = React.useState(1);

  const {connection} = useConnection();
  const wallet = useWallet();

  async function createToken(){

    const mintAccountKeypair = Keypair.generate(); //mint account of token

    const lamports = await getMinimumBalanceForRentExemptMint(connection); //rent exempt of mint account
     
    const transaction = new Transaction();

    transaction.add(
      SystemProgram.createAccount({
        fromPubkey:wallet.publicKey,
        newAccountPubkey:mintAccountKeypair.publicKey,
        space:MINT_SIZE, 
        lamports,        
        programId:TOKEN_PROGRAM_ID
      }),
      // (account: mintAccountKeypair.publicKey, decimal:9, mintAuthority:wallet.publicKey, freezAuthority:wallet.publicKey, programId:TOKEN_PROGRAM_ID)
      createInitializeMint2Instruction(mintAccountKeypair.publicKey, 9, wallet.publicKey, wallet.publicKey, TOKEN_PROGRAM_ID) 
    );

    transaction.feePayer = wallet.publicKey;
    transaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;

    transaction.partialSign(mintAccountKeypair);

    const resultSign = await wallet.sendTransaction(transaction, connection);
    console.log(resultSign); // transaction signature
    console.log("mintAcountKeypair", mintAccountKeypair.publicKey.toBase58()); // mint account public key
  }
  
  return (
    <div className="flex flex-col flex-grow-0 h-screen w-full items-center bg-black gap-2 rounded-b-xl mt-10">
      <h1 className="text-4xl font-bold font-mono mb-10 shadow-xl text-blue-300 underline  ">
        {" "}
        Solana Token Launchpad
      </h1>

      {/* <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="border border-black bg-blue-300 text-black font-bold text-2xl w-96 p-2 rounded-lg "
      />
      <input
        type="text"
        onChange={(e) => setSymbol(e.target.value)}
        placeholder="Symbol"
        className="border border-black bg-blue-300 text-black font-bold text-2xl w-96 p-2 rounded-lg"
      />
      <input
        type="text"
        onChange={(e) => setImageUrl(e.target.value)} 
        placeholder="Image URL"
        className="border border-black bg-blue-300 text-black font-bold text-2xl w-96 p-2 rounded-lg"
      />
      <input
        type="text"
        onChange={(e) => setInitialSupply(e.target.value)}
        placeholder="Initial Supply"
        className="border border-black bg-blue-300 text-black font-bold text-2xl w-96 p-2 rounded-lg"
      /> */}
      <button
        onClick={createToken}
        type="button"
        className="bg-blue-200 p-4 mt-14 rounded-full text-xl font-bold hover:bg-blue-600 hover:text-white"
      >
        create a token
      </button>
    </div>
  );
}

export default TokenLaunchpad;
