import * as ed from "@noble/ed25519";

async function main() {
  // Generate a secure random private key
  const privKey = ed.utils.randomPrivateKey();
  console.log("private key",privKey)
  
  // Convert the message "hello world" to a Uint8Array
  const message = new TextEncoder().encode("hello world");
  console.log("message",message)
  
  // Generate the public key from the private key
  const pubKey = await ed.getPublicKeyAsync(privKey);
  console.log("public key",pubKey)
  console.log("public key",pubKey.toString("bs58"))

  // Sign the message
  const signature = await ed.signAsync(message, privKey);
  console.log("signature",signature)

  // Verify the signature
  const isValid = await ed.verifyAsync(signature, message, pubKey);

  // Output the result
  console.log(isValid); // Should print `true` if the signature is valid
}

main();
