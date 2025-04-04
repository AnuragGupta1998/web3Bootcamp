import React from 'react'
import {createPublicClient,http,weiUnits} from "viem"
import {mainnet} from "viem/chains"

//create client
const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})


function Viem() {
    const[balance, setBalance] = React.useState(0)

    async function getBalance(){
        const bal= await client.getBalance({
            address: "0x80FC3170429721EC6E59407286Bf7a26b5066BE5"
        })
        setBalance(bal);
    }
  return (
  <>
  
    <div>Viem</div>
    <div>The Balance of Account {balance}</div>
    <button onClick={getBalance}> Click </button>
  </>
  )
}

export default Viem