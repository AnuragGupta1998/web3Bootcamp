import React, { useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { TOKEN_2022_PROGRAM_ID, getMintLen, createInitializeMetadataPointerInstruction, createInitializeMintInstruction, TYPE_SIZE, LENGTH_SIZE, ExtensionType } from "@solana/spl-token"
import { Keypair, SystemProgram, Transaction } from "@solana/web3.js";
import { createInitializeInstruction, pack } from '@solana/spl-token-metadata';

const TokenLaunchpad = () => {
  const { connection } = useConnection();
  const wallet = useWallet();

  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [initialSupply, setInitialSupply] = useState(1);

  async function createSolanaToken() {
    console.log(name, symbol, imageUrl, initialSupply);
    const mintKeypair = Keypair.generate();
        // const metadata = {
        //     mint: mintKeypair.publicKey,
        //     name: 'KIRA',
        //     symbol: 'KIR    ',
        //     uri: 'https://cdn.100xdevs.com/metadata.json',
        //     additionalMetadata: [],
        // };
        const metadata = {
            mint: mintKeypair.publicKey,
            name: name,
            symbol: symbol,
            uri: 'https://cdn.100xdevs.com/metadata.json',
            additionalMetadata: [],
        };

        const mintLen = getMintLen([ExtensionType.MetadataPointer]);
        const metadataLen = TYPE_SIZE + LENGTH_SIZE + pack(metadata).length;

        const lamports = await connection.getMinimumBalanceForRentExemption(mintLen + metadataLen);

        const transaction = new Transaction().add(
            SystemProgram.createAccount({
                fromPubkey: wallet.publicKey,
                newAccountPubkey: mintKeypair.publicKey,
                space: mintLen,
                lamports,
                programId: TOKEN_2022_PROGRAM_ID,
            }),
            createInitializeMetadataPointerInstruction(mintKeypair.publicKey, wallet.publicKey, mintKeypair.publicKey, TOKEN_2022_PROGRAM_ID),
            createInitializeMintInstruction(mintKeypair.publicKey, 9, wallet.publicKey, null, TOKEN_2022_PROGRAM_ID),
            createInitializeInstruction({
                programId: TOKEN_2022_PROGRAM_ID,
                mint: mintKeypair.publicKey,
                metadata: mintKeypair.publicKey,
                name: metadata.name,
                symbol: metadata.symbol,
                uri: metadata.uri,
                mintAuthority: wallet.publicKey,
                updateAuthority: wallet.publicKey,
            }),
        );
            
        transaction.feePayer = wallet.publicKey;
        transaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
        transaction.partialSign(mintKeypair);

        await wallet.sendTransaction(transaction, connection);
   
  }

  return (
    <div className="text-white text-center flex flex-col items-center gap-2">
      TokenLaunchpad
     
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="border border-black bg-blue-300 text-black font-bold text-2xl w-96 p-2 rounded-lg "
      />
      <input
        type="text"
        onChange={(e) => setSymbol(e.target.value)}
        placeholder="Symbol"
        className="border border-black bg-blue-300 text-black font-bold text-2xl w-96 p-2 rounded-lg"
      />
      <input
        type="text"
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Image URL"
        className="border border-black bg-blue-300 text-black font-bold text-2xl w-96 p-2 rounded-lg"
      />
      <input
        type="text"
        onChange={(e) => setInitialSupply(e.target.value)}
        placeholder="Initial Supply"
        className="border border-black bg-blue-300 text-black font-bold text-2xl w-96 p-2 rounded-lg"
      />

      <button 
       onClick={createSolanaToken}
       className="bg-blue-300 text-black font-bold text-2xl w-52 p-3 rounded-lg hover:bg-blue-400 font-mono"
       
       > 
        Create Token
      </button>

    </div>
  );
};

export default TokenLaunchpad;
