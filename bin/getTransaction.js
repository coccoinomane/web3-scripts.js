const Web3 = require('web3');
const abiDecoder = require('abi-decoder')

// VARS
const web3 = new Web3('https://avalanche--mainnet--rpc.datahub.figment.io/apikey/e058242cf36f9ace1f11f7c9c0254bd9/ext/bc/C/rpc'); // avalanche
const argv = process.argv.slice(2);
const txHash = argv[0]

if (!txHash) {
    throw new Error("Provide txHash")
}

// DO
web3.eth.getTransaction(txHash).then((tx) => {
    console.log(">>> TX")
    console.log(tx)
    console.log(">>> INPUT")
    console.log(tx.input)
    console.log(">>> DECODED INPUT")
    console.log(web3.utils.hexToAscii(tx.input))
});