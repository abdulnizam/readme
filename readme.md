import { useState } from "react";

export default function TestMalwareUpload() {
  const [scanResult, setScanResult] = useState(null);

  const handleTestMalware = () => {
    // Simulated EICAR test string
    const eicarString =
      "X5O!P%@AP[4\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*";

    // Simulate uploading and scanning
    const isMalicious = eicarString.includes("EICAR");
    setScanResult(isMalicious ? "Malware detected!" : "File is clean.");
  };

  return (
    <div>
      <h1>Test Malware Scanning</h1>
      <button onClick={handleTestMalware}>Simulate Malware Upload</button>
      {scanResult && <p>{scanResult}</p>}
    </div>
  );
}

 const eicarContent = `
    X5O!P%@AP[4\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*
    `;
const eicarFile = new File([eicarContent.trim()], 'eicar.txt', {
    type: 'text/plain',
});


const axios = require("axios");
const fs = require("fs");

async function scanFile() {
  const fileContent = Buffer.from("X5O!P%@AP[4\\PZX54(P^)7CC)...");

  const response = await axios.post(
    "https://www.virustotal.com/api/v3/files",
    fileContent,
    {
      headers: {
        "x-apikey": "your_virustotal_api_key",
        "Content-Type": "application/octet-stream",
      },
    }
  );

  console.log(response.data);
}

scanFile();


fetch("http://localhost:8081/v1/uploadfile/", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryXtsA7tTdJLoLjSAy",
      "learning-id": "67517845e9a539224809d12b",
      "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "x-origin": "content-creation-front-end",
      "x-request-id": "07b68385-3ad9-44c0-ba30-468688382283",
      "Referer": "http://localhost:8080/",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": "------WebKitFormBoundaryXtsA7tTdJLoLjSAy\r\nContent-Disposition: form-data; name=\"file\"; filename=\"Sample.docx\"\r\nContent-Type: application/vnd.openxmlformats-officedocument.wordprocessingml.document\r\n\r\n\r\n------WebKitFormBoundaryXtsA7tTdJLoLjSAy--\r\n",
    "method": "POST"
  });
