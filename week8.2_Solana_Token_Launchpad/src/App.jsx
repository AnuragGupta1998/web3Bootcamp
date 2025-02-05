import { useState } from "react";
import "./App.css";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletMultiButton,
  WalletDisconnectButton,
} from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";

import TokenLaunchpad from "./components/TokenLaunchpad";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ConnectionProvider endpoint="https://api.devnet.solana.com">
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div className="flex justify-between">
            <WalletMultiButton />
            <WalletDisconnectButton />
          </div>
          <TokenLaunchpad />  
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
