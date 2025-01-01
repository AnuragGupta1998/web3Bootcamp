import React, { useMemo } from "react";
import {ConnectionProvider,WalletProvider} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,

} from "@solana/wallet-adapter-react-ui";

import { clusterApiUrl } from "@solana/web3.js";

import "@solana/wallet-adapter-react-ui/styles.css";
import Airdrop from "./Airdrop";

function App() {


  return (
    <>
      {/* this provide connection to Blockchain and  endpoint replace with RPC endpoint(https://api.devnet.solana.com) */}
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
        {/* this provide wallet object that lets you  automatically detect wallet */}
          <WalletProvider wallets={[]} autoConnect> 
            {/* this provide popup object how the wallet popup while connecting to wallet */}
              <WalletModalProvider>
                <div className="flex flex-row justify-center mt-5 gap-2 w-full">
                  {/* it provide select wallet button */}
                  <WalletMultiButton />
                  {/* it provide disconnect button */}
                  <WalletDisconnectButton />
                </div>
                <Airdrop />

                {/* <RequestAirdrop />
                <ShowSolBalance /> */}
                {/* <Tokens /> */}
                {/* <SignMessage />
                <SendTokens /> */}
              </WalletModalProvider>
          </WalletProvider>
      </ConnectionProvider>
    </>
  );
}

export default App;
