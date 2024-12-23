import { useState } from "react"
import { mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl"

export function SolanaWallet({ mnemonic }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [publicKeys, setPublicKeys] = useState([]);

    function generate() {
      // const seed = mnemonicToSeedSync(mnemonic);
      // const path = `m/44'/501'/${currentIndex}'/0'`;
      // const derivedSeed = derivePath(path, seed).key;
      // const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
      // const keypair = Keypair.fromSecretKey(secret);
      const seed=mnemonicToSeedSync(mnemonic.join(" "));
      const derivedSeed = derivePath(`m/44'/501'/${currentIndex}'/0'`, seed.toString("hex")).key;
      const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
      const keypair=Keypair.fromSecretKey(secret);  
      setCurrentIndex(currentIndex + 1);
      setPublicKeys([...publicKeys, keypair.publicKey]);
  }

    return <div>
        <button onClick={generate} className="bg-gray-900 text-white mt-5 p-2 rounded-lg">
            Add wallet
        </button>
        {publicKeys.map((p,index) => <div key={index} className="text-white">
            {p.toBase58()}
        </div>)}
    </div>
}