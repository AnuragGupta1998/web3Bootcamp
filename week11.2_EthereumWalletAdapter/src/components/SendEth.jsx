
import React,{useRef} from "react";
import {  useSendTransaction } from "wagmi";
import { parseEther } from "viem";


function SendEth() {

    const addressRef = useRef("");
    const amountRef = useRef(0);

 
    // const[receiverAddress, setReceiverAddress] = useState("");
    // const[amount, setAmount] = useState("");

    const{data:hash,sendTransaction}= useSendTransaction()

    async function sendEthereum(){

      console.log("hash",hash);
      
      await sendTransaction({
        to: addressRef.current.value,
        value: parseEther(amountRef.current.value),
      })

    }

    console.log(addressRef.current.value); 
    console.log(amountRef.current.value); 
    
  return (
    <>
      <div className="bg-cyan-300 text-black mt-10 mb-5 rounded-lg p-5 font-bold ">Send ETHEREUM Component</div>

      <div className="flex flex-col gap-4 mt-5">
        <input  
         type="text" 
         placeholder="Enter receiver address"
         ref={addressRef}
         className="border-1 border-gray-300 rounded-md p-2 text-black font-bold font-mono bg-cyan-100"
       />
        <input  
         type="text" 
         placeholder="amount in eth"
         ref={amountRef}
         className="border-1 border-gray-300 rounded-md p-2 font-mono font-bold text-black  bg-cyan-100"
       />
        <button onClick={sendEthereum}>Send
        </button>


        {
          hash && <div>Transaction hash :{ hash }</div>
        }

      </div>

    </>
  );
}

export default SendEth;
