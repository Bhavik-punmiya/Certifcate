// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIzZDFmYjIxZi04YmJmLTQ1NTEtOTNhYi03ZTFiZDliY2I0NWEiLCJlbWFpbCI6ImJoYXZpa3B1bm1peWFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6Ijg1NjBmMWRiNzkzNTgzYTgyNzEwIiwic2NvcGVkS2V5U2VjcmV0IjoiNDNlMjEwNmRlYjE1MmRmZjE0NzllMDg0MTM4YzkxY2ZhMzEzYzExN2M5NTNkNWFmZWVjNTQ1NTZmMTkwNjYzNSIsImlhdCI6MTY5ODMyOTc1Mn0.lagrL4dXfo37aH61UbonxNRuYIDC52sgfu_SiKNJHg8
const axios = require('axios')
const FormData = require('form-data')
const fs = require('fs')

const JWT = 'Your JWT Token'

const pinFileToIPFS = async () => {
    const formData = new FormData();
    //E-Certificates/Certificates/BhavikPunmiya.jpg
    const src = "../E-Certificates/Certificates/BhavikPunmiya.jpg";
    
    const file = fs.createReadStream(src)
    formData.append('file', file)
    
    const pinataMetadata = JSON.stringify({
      name: 'Output',
    });
    formData.append('pinataMetadata', pinataMetadata);
    
    const pinataOptions = JSON.stringify({
      cidVersion: 0,
    })
    formData.append('pinataOptions', pinataOptions);

    try{
      const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        maxBodyLength: "Infinity",
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
          'Authorization': `Bearer ${JWT}`
        }
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
}

pinFileToIPFS()