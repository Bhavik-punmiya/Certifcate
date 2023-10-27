require('dotenv').config();
const ethers = require('ethers');
const fs = require('fs')

const provider = new ethers.providers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const contractAddress = "0x485f2D7956e79d22b67C2019dB3D9cD26b275f9E";
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




module.exports = mintNFT;