// What if I ask you the following question — Give me an input string that outputs a SHA-256 hash that starts with 00000 . How will you do it?
// A: You will have to brute force until you find a value that starts with 00000

const crypto = require('crypto');

function findNounce(prefix){
    let input=0;

    while(true){
        // let inputStr=input.toString();
        // let inputStr="anurag"+input.toString();
        let inputStr = `
harkirat => Raman | Rs 100
Ram => Ankit | Rs 10
` + input.toString();
    
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');

        if (hash.startsWith(prefix)) {
            return { input: inputStr, hash: hash };
        }

        input++
    }
}

const str=findNounce('00000');

console.log(`Input: ${str.input}`);
console.log(`Hash: ${str.hash}`);

// function findHashWithPrefix(prefix) {
//     let input = 0;
//     while (true) {
//         let inputStr = `
// harkirat => Raman | Rs 100
// Ram => Ankit | Rs 10
// ` + input.toString();
//         let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
//         if (hash.startsWith(prefix)) {
//             return { input: inputStr, hash: hash };
//         }
//         input++;
//     }
// }

// // Find and print the input string and hash
// const result = findHashWithPrefix('00000');
// console.log(`Input: ${result.input}`);
// console.log(`Hash: ${result.hash}`);