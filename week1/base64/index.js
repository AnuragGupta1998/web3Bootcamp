const arr = new Uint8Array([72,101,108,108,111]);//bytes

const base64Encode=Buffer.from(arr).toString('base64');

console.log(base64Encode)  //o/p  SGVsbG8=