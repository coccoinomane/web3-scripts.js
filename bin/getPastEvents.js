/**
 * Get all logs of last block for the given contract address
 */

const Web3 = require('web3');
const abiDecoder = require('abi-decoder')

// VARS
const web3 = new Web3('https://avalanche--mainnet--rpc.datahub.figment.io/apikey/e058242cf36f9ace1f11f7c9c0254bd9/ext/bc/C/rpc'); // avalanche
const argv = process.argv.slice(2);
const contractAddress = argv[0]

if (!contractAddress) {
    throw new Error("Provide contractAddress")
}

// DO
const scriptFunc = async () => {
    block = await web3.eth.getBlock('latest')

    const args = {
        fromBlock: block.number,
        toBlock: block.number,
        address: contractAddress,
    }

    logs = await web3.eth.getPastLogs(args)

    console.log(">>> LATEST BLOCK")
    console.log(block)
    console.log(">>> LOGS")
    console.log(logs)
}

scriptFunc()

