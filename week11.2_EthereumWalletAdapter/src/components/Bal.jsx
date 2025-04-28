import React from 'react'
import { useAccount,useBalance } from 'wagmi'

function Bal() {

    const{data}=useBalance({address:"0x80FC3170429721EC6E59407286Bf7a26b5066BE5"});

  return (
    <div>
        <h3>bal component</h3>
        bal = {} 
    </div>
  )
}

export default Bal