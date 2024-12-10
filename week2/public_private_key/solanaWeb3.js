import {Keypair} from "@solana/web3.js"
import nacl from "tweetnacl"

//generate new key pairs
const keypair=Keypair.generate();

//extract public private key from keypair
// const publicKey=keypair.publicKey.toBytes();
const publicKey=keypair.publicKey.toString();

const secretKey=keypair.secretKey;

//displaying keys
console.log("public key",publicKey);
console.log("private key",secretKey.toString());

//converting messages to UInt8Array
const msg=new TextEncoder().encode("hello world");
console.log("msg",msg)

//signature the message by private(secret key)
const signature=nacl.sign.detached(msg,secretKey)

//verifying the message using signature and public key 
const verify=nacl.sign.detached.verify(
    msg,
    signature,
    keypair.publicKey.toBytes()
)
console.log(verify)

