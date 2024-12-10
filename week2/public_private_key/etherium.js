import * as secp from "@noble/secp256k1";
import { PublicKey } from "@solana/web3.js";

async function main() {
  const privKey = secp.utils.randomPrivateKey(); // Secure random private key
  console.log("private key",privKey)
  // sha256 of 'hello world'
  const msgHash =
    "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9";
  const pubKey = secp.getPublicKey(privKey);
  console.log("public key",pubKey)

  const signature = await secp.signAsync(msgHash, privKey); // Sync methods below
  
  const isValid = secp.verify(signature, msgHash, pubKey);
  console.log(isValid);
}

main();
