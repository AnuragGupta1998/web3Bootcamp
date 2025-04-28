import React from "react";
import { useBalance, useAccount } from "wagmi";
import { useDisconnect } from "wagmi";

function ShowBalance() {
  const { address, isConnected } = useAccount();
  // const balance = useBalance({address: "0x80FC3170429721EC6E59407286Bf7a26b5066BE5"});
  const balance = useBalance({ address });

  const { disconnect } = useDisconnect();

  console.log("balance", balance?.data?.formatted);
  console.log("isConnected", isConnected);
  console.log("addres", address);

  function disconnectWallet() {
    console.log("disconnect wallet");
    disconnect();
  }

  return (
    <>
      <div className="flex gap-8 justify-between">
        <div className="bg-cyan-300 text-black font-bold p-6 rounded-lg flex justify-center">
          {" "}
          ShowBalance Component
        </div>

        <button
          className="  text-white font-bold "
          onClick={disconnectWallet}
        >
          Disconnect from wallet
        </button>
      </div>

      {
        <div className="flex flex-col gap-4 mt-5">
          <p className="font-bold text-black"> Address: {address} </p>
          <p className="font-bold text-black">
            {" "}
            Balance: {balance?.data?.formatted} ETH{" "}
          </p>
          <p className="font-bold text-black">
            {" "}
            Balance in Wei: {balance?.data?.value} Wei{" "}
          </p>
        </div>
      }

      {/* {isConnected && 
        <button
          className="bg-cyan-300 w-auto h-auto "
          onClick={() => disconnect()}
        >
          {" "}
          Disconnect from wallet{" "}
        </button>
      } */}
    </>
  );
}

export default ShowBalance;
