import "./App.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { config } from "./config";
import { WagmiProvider } from "wagmi";
import ShowWallets from "./components/ShowWallets";
import ShowBalance from "./components/ShowBalance";
import SendEth from "./components/SendEth";
import Bal from "./components/Bal";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <h1 className="font-bold mb-5 underline text-black font-sans">ETHEREUM WALLET ADAPTER</h1>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          {/* all other components comes here */}
          <div className="flex flex-col gap-4">

            <ShowWallets />
            {/* <ShowBalance />
            <SendEth /> */}
            
            {/* <Bal /> */}

          </div>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
}

export default App;
