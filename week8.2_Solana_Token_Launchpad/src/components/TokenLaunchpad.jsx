import React from "react";

function TokenLaunchpad() {
  return (
    <div className="flex flex-col flex-grow-0 h-screen w-full items-center bg-black gap-2 rounded-b-xl mt-10">
      <h1 className="text-4xl font-bold font-mono mb-10 shadow-xl text-blue-300 underline  ">
        {" "}
        Solana Token Launchpad
      </h1>

      <input
        type="text"
        placeholder="Name"
        className="border border-black bg-blue-300 text-black font-bold text-2xl w-96 p-2 rounded-lg "
      />
      <input
        type="text"
        placeholder="Symbol"
        className="border border-black bg-blue-300 text-black font-bold text-2xl w-96 p-2 rounded-lg"
      />
      <input
        type="text"
        placeholder="Image URL"
        className="border border-black bg-blue-300 text-black font-bold text-2xl w-96 p-2 rounded-lg"
      />
      <input
        type="text"
        placeholder="Initial Supply"
        className="border border-black bg-blue-300 text-black font-bold text-2xl w-96 p-2 rounded-lg"
      />
      <button
        type="button"
        className="bg-blue-200 p-4 mt-14 rounded-full text-xl font-bold hover:bg-blue-600 hover:text-white"
      >
        create a token
      </button>
    </div>
  );
}

export default TokenLaunchpad;
