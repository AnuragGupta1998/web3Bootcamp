import React from 'react'
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, Transaction, PublicKey, SystemProgram,sendAndConfirmTransaction} from '@solana/web3.js';



function SendSolana() {

    const wallet = useWallet();
    const {connection} = useConnection();
    const[address, setAddress] = React.useState('');
    const[amount, setAmount] = React.useState("");

    async function sendSol(){

      console.log("address",typeof(address));
      alert("address: "+address+ " amount: "+amount);

      if(!address){
        alert("Please enter a valid address");
        return;
      } 
      if(!wallet.publicKey){
        alert("Please connect to a wallet");
        return;
      }
      if(!connection){
        alert("Please connect to a network");
        return;
      }
      
      const trasanction = new Transaction();

      trasanction.add(
        SystemProgram.transfer({
          fromPubkey: wallet.publicKey,
          toPubkey  : new PublicKey(address),
          lamports  : amount*LAMPORTS_PER_SOL
        }),
      );

      await wallet.sendTransaction(trasanction,connection);
      alert("Transaction sent",amount,"to",address);

      setAddress("");
      setAmount("");

    }

  return (
    <>
   <h1 className=' text-cyan-200 underline font-bold text-2xl font-mono -mb-16'>SEND SOLANA</h1>
 
    <div className='w-full h-52 py-0 flex justify-centre items-center gap-10'>
        <input 
         type="text"
         value={address} 
         placeholder='other solana wallet address' 
         onChange={(e) => setAddress(e.target.value)}
         className='h-10 border p-2 py-8 w-full ml-5 text-2xl rounded-lg border-black mt-10 bg-green-300  font-bold font-momo'/>
        <input 
         type="text" 
         value={amount}
         placeholder='Amount' 
         onChange={(e) => setAmount(e.target.value)}
         className='h-10  border p-5 py-8 w-32 ml-5 rounded-lg text-2xl border-black mt-10 bg-green-300  font-bold font-mono'/>
        <button 
         type="button"
         onClick={sendSol}
         className='border border-black py-5 text-2xl  bg-blue-500 rounded-lg w-64 mr-5 mt-10 text-center font-bold font-mono hover:bg-blue-700 hover:text-cyan-200'
         > 
          Send SOL
        </button>

    </div>
    </>
  )
}

export default SendSolana