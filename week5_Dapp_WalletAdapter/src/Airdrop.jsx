import React from 'react'
import { useWallet } from '@solana/wallet-adapter-react'

function Airdrop() {
    const wallet = useWallet()
    // alert(wallet.publicKey.toString())

    async function requestAirdrop() {  
        // alert(wallet.publicKey.toString())
        const response = await fetch(
          `https://api.devnet.solana.com/requestAirdrop/${wallet.publicKey.toString()}?lamports=1000000000`
        )
        const data = await response.json()
        console.log(data)
      } 
  return (
    <div className="mt-5 flex justify-center gap-1">
        {/* {wallet.publicKey.toBase58()} */}
     <input type="text" placeholder="SOL to airdrop" className='border border-black w-1/6 p-1 rounded-lg'></input>
     <button type="button" onClick={requestAirdrop} className='bg-blue-700 rounded-lg p-1 text-white font-bold'>Airdrop sol </button>
    </div>
  )
}

export default Airdrop