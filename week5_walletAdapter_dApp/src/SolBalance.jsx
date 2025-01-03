import React, { useState } from 'react'
import { useWallet,useConnection } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';


function SolBalance() {
    const{connection}=useConnection();
    const wallet = useWallet();
    const[balance,setBalance]=useState(0);

    async function getBalance(){    
        const balance = await connection.getBalance(wallet.publicKey);
        setBalance(balance/LAMPORTS_PER_SOL);
    
    }
    getBalance();

  return (
    <div>SOL Balance is {balance} </div>
  )
}

export default SolBalance