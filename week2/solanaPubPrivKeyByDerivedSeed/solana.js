import nacl from "tweetnacl";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
// const bs58 = require('bs58');
import bs58 from 'bs58'

const mnemonic = generateMnemonic();  //generating 12 word mnemonic phrases
console.log("Mnemonic",mnemonic.split(" "))

const seed = mnemonicToSeedSync(mnemonic); //generating root seed from mnemonics
console.log("seed",seed)
console.log("seedHex value ",seed.toString("hex"))

//generating 4th times different different public key
for (let i = 0; i < 4; i++) {

  //Derived Path Hard coded it is for solana wallet
  const path = `m/44'/501'/${i}'/0'`; // This is the derivation path

  //derived seed from derived path and root seed
  const derivedSeed = derivePath(path, seed.toString("hex")).key;
  console.log("derived path seed",derivedSeed.toString('hex'))

  //private key from derived seed by nacl.sign.keyPair.fromSeed(derivedSeed).secretKey
  const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
  console.log("private key",bs58.encode(secret))

  //public key
  console.log("public key",Keypair.fromSecretKey(secret).publicKey.toBase58());
}