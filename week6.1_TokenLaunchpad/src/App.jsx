import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";

import "./App.css";
import TokenLaunchpad from "./components/TokenLaunchpad";

function App() {
  return (
    <>
      <div className="bg-black rounded-t-xl ">
        <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
          <WalletProvider wallets={[]} autoConnect>
            <WalletModalProvider>
              <div className="flex justify-between gap-x-5 mb-20">
                <WalletMultiButton />
                <WalletDisconnectButton />
              </div>
              <TokenLaunchpad />
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </div>
    </>
  );
}

export default App;
