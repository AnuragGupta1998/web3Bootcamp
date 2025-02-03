import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

import {ConnectionProvider,WalletProvider,} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

import "@solana/wallet-adapter-react-ui/styles.css";

import "./App.css";
import AirdropSol from "./components/AirdropSol";
import SolBalance from "./components/SolBalance";
import SendSolana from "./components/SendSolana";
import SignMessage from "./components/SignMessage";
// import { useMemo } from "react";

function App() {

  // const network = WalletAdapterNetwork.Devnet;
  // const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  return (
    <>
      {/* <ConnectionProvider endpoint="https://devnet.helius-rpc.com/?api-key=c6d4c0ad-7516-400a-802a-d7a6acf4080f"> */}
      <ConnectionProvider endpoint="https://solana-devnet.g.alchemy.com/v2/IcYulVIv2q4oRgcoKNlDTdYObTqetng6">
      {/* <ConnectionProvider endpoint="https://api.devnet.solana.com"> */}
      {/* <ConnectionProvider endpoint={endpoint}> */}
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div className="bg-black text-white p-4 flex justify-between  rounded-lg  h-28">
              <WalletMultiButton />
              <WalletDisconnectButton />
            </div>
            <SolBalance />
            <AirdropSol />
            <SendSolana />
            <SignMessage />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
}

export default App;
