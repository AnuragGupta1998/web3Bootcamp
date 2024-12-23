import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MnemonicCompo from './components/MnemonicCompo'
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { SolanaWallet } from './components/SolanaWallet'



function App() {
  const[mnemonics, setMnemonics] = useState([]);
  const[mnemonicG, setMnemonicG] = useState(false)

  async function generateMne(){
    const mnemonic = generateMnemonic().split(" ");
    setMnemonics(mnemonic);
    setMnemonicG(true);
  }

  // const mnemonicComponent=() => mnemonics.map((mnemonic,index) => (
  //   <div key={index}> {mnemonic} </div>
  // ));
  return (
    <>
      <div>
        <input type="text" placeholder='enter your seed phrases' className=' bg-gray-300 border border-black mr-5 w-9/12 rounded-lg mb-5 p-2' />
        {<button onClick={generateMne} className='bg-black text-white border-black border rounded-lg p-2'>Generate Mnemonic</button>}
       
       {mnemonicG && <div className='bg-black flex flex-wrap gap-2 h-32 w-full border border-black rounded-lg'>
          {mnemonics.map((mnemonic,index) => (
            <div key={index} className='bg-yellow-300 h-10 w-28 border border-black ml-2 mt-2 rounded '>{mnemonic}</div>
          ))} 
          </div>}
      </div>

      <SolanaWallet mnemonic={mnemonics} />
    </>
  )
}

export default App
