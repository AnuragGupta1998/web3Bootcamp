import React, { useState } from "react";
import nacl from "tweetnacl";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";


import { v4 as uuidv4 } from 'uuid';

const arr = ["ab", "cd", "ef", "gh", "ij", "kl", "mn", "op"];

function MnemonicCompo() {
  const [mnemonics, setMnemonics] = useState([])

  function generateM(){
    const m = generateMnemonic().split(" ");
   
    setMnemonics(m);
    

  }

  return (
    <>
      <h4 className="text-2xl mb-5">the mnemonics phrase</h4>

      <div className="flex gap-3 justify-center mb-5">
       <input type="text" placeholder="enter your secret phrase" className="border-black border w-full rounded-md bg-gray-600 p-2 text-white" />
       <button 
       type="button" 
       className="bg-green-400 rounded-lg pl-5 pr-5"
       onClick={generateM}>
          generate
       </button>
      </div>

      <div className="bg-yellow-200 h-32 w-full flex flex-wrap gap-2 font-bold">

        {mnemonics.map((mnemonic,index) => (
      
          <div key={index} className="bg-blue-100 h-5 w-14 font-bold ">{mnemonic}</div>
          
        ))}

      </div>
    </>
  );
}

export default MnemonicCompo;
