require('dotenv').config();
const ethers = require('ethers');
const fs = require('fs');

const provider = new ethers.providers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const contractAddress = "0xf37E32Ff61bB3586441095625dbA77B09adea341";
const contractAbi = JSON.parse(fs.readFileSync('constants/ContractABI.json', 'utf8'));

// Create a contract instance with a signer and specify the gas limit
const contract = new ethers.Contract(contractAddress, contractAbi, signer).connect(signer);

async function mintNFT(tokenId, tokenUrl) {
    try {
        const gasLimit = await contract.estimateGas.mintNft(tokenId, tokenUrl);
        const tx = await contract.mintNft(tokenId, tokenUrl, {
            gasLimit: 50000, // Use the estimated gas limit
        });
         await signer.sendTransaction(tx);
        console.log(`Transaction successful with hash: ${tx.hash}`);
    } catch (e) {
        console.log("Error: ", e);
    }
}

mintNFT(43, 'ipfs://QmaXkzGu4FxYt57afkVixLufidZhkG2ZWnL65q6WHR6RGN/?filename=Rena Shah.jpg.json');

module.exports = mintNFT;
