 in week 10 

1. we lean basic architecture of ethereum how does it   work 

when solidity codes gets complied the byte codes and ABI code generated

2. learn about EVM(ETHEREUM VIRTUAL MACHINE) that understand only byte codes

3. OPCODE(Operation code) that is the series of bytes code 
4. opcode is the instruction that evm perform under the hood

5.ABI (Application Binary Interface) which allos application and users to interact with smart contract of ehtereum deployed over ethereum blockchain

6. the ABI defines the how communication happendsbetween smart contract and users and application

Example of ABI
//this is ABI of smart contract in ETHEREUM
[
	{
		"inputs": [],
		"name": "retrieve",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "store",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]