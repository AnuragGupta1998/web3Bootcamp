import React from 'react'
import { useWallet, useConnection, } from "@solana/wallet-adapter-react";
import {} from "@solana/web3.js"


function SignMessage() {
    const[message, setMessage] = React.useState('');

    async function sendMsg(){   

       const msg="hi i am anurag";
       const encodeMsg= new TextEncoder().encode(msg);


    }

  return (
    <>
    <div className='bg-yellow-200 w-full flex justify-between'>
        <input 
         type="text" 
         value={message} 
         placeholder='Message' 
         onChange={(e) => setMessage(e.target.value)} 
         className='h-36 w-3/4 border p-5 py-8 text-2xl rounded-lg border-black bg-green-300  font-bold font-momo'
        />
        <button 
         type='button'
         onClick={sendMsg}
         className='bg-red-500 text-white p-5 font-bold font-momo h-20 mt-8 mr-5 rounded-lg' 
        >
            send msg
        </button>
        
    </div>
    
    
    </>
   
  )
}

export default SignMessage