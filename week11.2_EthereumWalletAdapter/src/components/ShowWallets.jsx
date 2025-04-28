import React from "react";
import { useConnect,useAccount } from "wagmi";
import ShowBalance from "./ShowBalance";
import SendEth from "./SendEth";

function ShowWallets() {

  const { connectors, connect } = useConnect();

  console.log("connectors", connectors);

  const{ isConnected } = useAccount();

  return (
    <>

     {/* <div className="bg-cyan-300 text-black font-bold p-5 rounded-lg">Show Wallets Component</div> */}
     {/* <div className="bg-cyan-300 text-black font-bold p-5 rounded-lg">Please Connect to your wallet</div> */}
      
      {/* <div className="flex flex-col gap-4 mt-5 mb-10">
        {connectors.map((connector) => (
          <button key={connector.uid} onClick={() => connect({ connector })}>
            {connector.name}
          </button>
        ))}
      </div> */}
      {
       isConnected ?   
        <div>
          <ShowBalance />
          <SendEth /> 
        </div> : 
        <div className="flex flex-col gap-4 mt-5 mb-10">
          <div className="bg-cyan-300 text-black font-bold p-5 rounded-lg">Please Connect to your wallet</div>
         {connectors.map((connector) => (
          <button key={connector.uid} onClick={() => connect({ connector })}>
            {connector.name}
          </button>
         ))}
       </div>
      }
      

    </>
  );
}

export default ShowWallets;
