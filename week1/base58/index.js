// // const bs58 = required('bs58');
import bs58 from 'bs58'

function base58Encode(arr){
    return bs58.encode(arr)
}

// const arr=new Uint8Array([72,101,108,108,111]);
const bytes = Uint8Array.from([
    0, 60,  23, 110, 101, 155, 234,
   15, 41, 163, 233, 191, 120, 128,
  193, 18, 177, 179,  27,  77, 200,
   38, 38, 129, 135
])
const base58Result = base58Encode(bytes);

console.log(base58Result)

