import{generateMnemonic,mnemonicToSeedSync} from 'bip39'

//generate mnemonic.........

// const mnemonic = generateMnemonic(256); //for 24 word mnemonic words
const mnemonic = generateMnemonic(128); //12 words mnemonic
console.log("mnemonic of wallet",mnemonic.split("  "))
 
//generate seed phrase using mnemonic.............

const seedPhrase=mnemonicToSeedSync(mnemonic);
console.log("seed phrase",seedPhrase)