const {runPythonScript} = require('./RunGenerator.js');
const main = require('./UploadNFT');
const mintNFT = require('./interact')
const GenerateCertificate = async () => {
    // Run the Python script
    // await runPythonScript();

    // get the file name and upload to ipfs and return hash
   
    const getTokenuri = await main('Bhavik Punmiya')
    console.log(getTokenuri)

    await mintNFT(21, getTokenuri)

};

GenerateCertificate();