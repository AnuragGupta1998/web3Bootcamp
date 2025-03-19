import { PublicKey } from "@solana/web3.js";
import {
  TOKEN_PROGRAM_ID,
  ASSOCIATED_TOKEN_PROGRAM_ID,
} from "@solana/spl-token";

const userPublicKey = new PublicKey(
  "5gjLjKtBhDxWL4nwGKprThQwyzzNZ7XNAVFcEtw3rD4i"
);
const tokenMintPublicKey = new PublicKey(
  "6NeR2StEEb6CP75Gsd7ydbiAkabdriMdixPmC2U9hcJs"
);

//find PDA of User

// const getAssociatedTokenAccountPublicKey = (userPublicKey, tokenMintPublicKey) => {
//   return PublicKey.findProgramAddressSync(
//     [
//       userPublicKey.toBuffer(),
//       tokenMintPublicKey.toBuffer(),
//       TOKEN_PROGRAM_ID.toBuffer(),
//     ],
//     ASSOCIATED_TOKEN_PROGRAM_ID
//   );
// };

// const[pda,bump] = getAssociatedTokenAccountPublicKey(userPublicKey,tokenMintPublicKey);

// console.log("PDA",pda.toBase58());
// console.log("BUMP",bump)

// the findProgramAddressSync method is used to find the PDA tha off curve 
 const[pda,bump] = PublicKey.findProgramAddressSync(
    [
        userPublicKey.toBuffer(),
        tokenMintPublicKey.toBuffer(),
        TOKEN_PROGRAM_ID.toBuffer()
    ],
    ASSOCIATED_TOKEN_PROGRAM_ID
 )

 console.log("PDA",pda.toBase58());
 console.log("bump",bump);

 //create PDA for User..................
 const pda1 = PublicKey.createProgramAddressSync( 
     [
         userPublicKey.toBuffer(),
         tokenMintPublicKey.toBuffer(),
         TOKEN_PROGRAM_ID.toBuffer(),
         Buffer.from([255])
        ],
        ASSOCIATED_TOKEN_PROGRAM_ID
    )
    
    console.log("pda1",pda1.toBase58())

    
 const bump1=254;
 const name="Anurag"
 const pda2 = PublicKey.createProgramAddressSync(
    [
        Buffer.from(name),
        Buffer.from([bump1])
        
    ],
    TOKEN_PROGRAM_ID
    
 )
 console.log("pda2",pda2.toBase58())
