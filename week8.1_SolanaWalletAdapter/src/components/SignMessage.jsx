import React from 'react'
import { useWallet, useConnection, } from "@solana/wallet-adapter-react"
import {ed25519} from "@noble/curves/ed25519"
import bs58 from "bs58"


function SignMessage() {

    const[message, setMessage] = React.useState('');
    const{publicKey,signMessage} = useWallet();

    async function signMsg(){
      if(!publicKey) throw new Error('Wallet not connected');
      
      if(!signMessage) throw new Error('Wallets does not support Sign message');

      const encodeMsg = new TextEncoder().encode(message);
      const sign = await signMessage(encodeMsg);

      const verifySign = ed25519.verify(sign,encodeMsg,publicKey.toBytes());

      if(!verifySign) throw new Error('Invalid Sign');

      alert('Sign message is valid');
      console.log("Message Signature",bs58.encode(sign)); 

    }

  return (
    <>
    <h1 className='text-cyan-200 text-2xl font-bold underline mb-5'>SIGN MESSAGE</h1>
    <div className='bg-black w-full flex justify-between'>
        <input 
         type="text" 
         value={message} 
         placeholder='Message' 
         onChange={(e) => setMessage(e.target.value)} 
         className='h-36 w-3/4 border p-5 py-8 text-2xl rounded-lg border-black bg-green-300  font-bold font-momo'
        />
        <button 
         type='button'
         onClick={signMsg}
         className='bg-blue-500 text-2xl p-5 font-bold font-momo h-20 mt-8 mr-5 rounded-lg hover:bg-blue-700 hover:text-cyan-200' 
        >
            Sign Message
        </button>
        
    </div>
    
    
    </>
   
  )
}

export default SignMessage