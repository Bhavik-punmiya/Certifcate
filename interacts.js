require('dotenv').config();
const ethers = require('ethers');
const fs = require('fs')

const provider = new ethers.providers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const contractAddress = "0xE059cB54fB45FccdFcE205676bCF69b3078EAeCC";
const contractAbi = JSON.parse(fs.readFileSync('constants/ContractABI.json', 'utf8'));

// Stringify the JSON data
const jsonString = JSON.stringify(contractAbi);

console.log('***********');
const contract = new ethers.Contract(contractAddress, jsonString, signer);
console.log('***********');
console.log(contract);

async function mintNFT(tokenId, tokenUrl) {
    try {
        const tx = await contract.mintNft(tokenId, tokenUrl);
        //await tx.wait();
        console.log(`Transaction successful with hash: ${tx.hash}`);
    } catch (e) {
        console.log("Error: ", e);
    }
}

mintNFT(43, 'ipfs://QmaXkzGu4FxYt57afkVixLufidZhkG2ZWnL65q6WHR6RGN/?filename=Rena Shah.jpg.json')


module.exports = mintNFT;