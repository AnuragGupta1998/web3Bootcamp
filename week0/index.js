const crypto =require('crypto');


// const input = "anurag";
// const hash=crypto.createHash('sha256').update(input).digest('hex');
const input=100;
const inputStr=input.toString();
const hash=crypto.createHash('sha256').update(inputStr).digest('hex');
console.log(hash);
