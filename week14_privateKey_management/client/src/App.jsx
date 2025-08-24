import { useState } from "react";
import axios from "axios";

import "./App.css";
import {
  Transaction,
  PublicKey,
  LAMPORTS_PER_SOL,
  SystemProgram,
  Connection,
} from "@solana/web3.js";

function App() {
  const connection = new Connection(
    "https://solana-mainnet.g.alchemy.com/v2/j4s0Qeb-r63Z-Wxs9ceEh5aWI9fkvhyo"
  );

  async function sendSolanaToAddress() {
    const transaction = new Transaction();

    transaction.add(
      // instruction
      SystemProgram.transfer({
        fromPubkey: new PublicKey(
          "A5uWeWPnRWZ1YycgcTsUSs6af6LCaWx6LN4znVJ4M61V"
        ),
        toPubkey: new PublicKey("9rnE3BnETaj2m93p1snnWfpqBcL2FxriVFPrkQpEsLvY"),
        lamports: 0.01 * LAMPORTS_PER_SOL,
      })
    );

    const { blockhash } = await connection.getLatestBlockhash();

    transaction.recentBlockhash = blockhash;

    transaction.feePayer = new PublicKey(
      "A5uWeWPnRWZ1YycgcTsUSs6af6LCaWx6LN4znVJ4M61V"
    );

    //convert transaction to bytes of array
    const serializeTxn = transaction.serialize({
      requireAllSignatures: false,

      verifySignatures: false,
    });
    // console.log("serializeTxn", serializeTxn);

    

    await axios.post("http://localhost:5001/api/v1/txn/sign", {
      message: serializeTxn,
      retry: false,
    });
  }

  return (
    <>
      <div>
        <input type="text" placeholder="Amount" />
        <input type="text" placeholder="Address" />
        <button onClick={sendSolanaToAddress}>Submit</button>
      </div>
    </>
  );
}

export default App;
