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

const axios = require("axios");
const FormData = require("form-data");

async function uploadFile() {
  // Create the EICAR test file content
  const eicarContent = `
    X5O!P%@AP[4\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*
  `;

  // Create a FormData object
  const formData = new FormData();
  formData.append("file", Buffer.from(eicarContent.trim()), {
    filename: "eicar.txt",
    contentType: "text/plain",
  });

  try {
    // Make the POST request using axios
    const response = await axios.post("http://localhost:8081/v1/uploadfile/", formData, {
      headers: {
        ...formData.getHeaders(), // Add necessary headers for multipart form data
        "learning-id": "67517845e9a539224809d12b",
        "x-origin": "content-creation-front-end",
        "x-request-id": "07b68385-3ad9-44c0-ba30-468688382283",
        Referer: "http://localhost:8080/",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
    });

    console.log("File uploaded successfully:", response.data);
  } catch (error) {
    console.error("Error uploading file:", error.response ? error.response.data : error.message);
  }
}

uploadFile();



const axios = require("axios");
const { Document, Packer } = require("docx");
const FormData = require("form-data");

async function uploadDocxFile() {
  // Step 1: Create a `.docx` file dynamically
  const doc = new Document({
    sections: [
      {
        children: [
          {
            text: `
              X5O!P%@AP[4\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*
            `,
          },
        ],
      },
    ],
  });

  // Convert the `.docx` content to a binary buffer
  const buffer = await Packer.toBuffer(doc);

  // Step 2: Create a FormData object and append the `.docx` file
  const formData = new FormData();
  formData.append("file", buffer, {
    filename: "eicar.docx",
    contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  });

  // Step 3: Send the `.docx` file to the server using Axios
  try {
    const response = await axios.post("http://localhost:8081/v1/uploadfile/", formData, {
      headers: {
        ...formData.getHeaders(),
        "learning-id": "67517845e9a539224809d12b",
        "x-origin": "content-creation-front-end",
        Referer: "http://localhost:8080/",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
    });

    console.log("File uploaded successfully:", response.data);
  } catch (error) {
    console.error("Error uploading file:", error.response ? error.response.data : error.message);
  }
}

uploadDocxFile();





const axios = require("axios");
const { Document, Packer, Paragraph, TextRun } = require("docx");
const FormData = require("form-data");

async function uploadDocxFile() {
  // Step 1: Create a `.docx` file and embed the EICAR string
  const eicarString = `
    X5O!P%@AP[4\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*
  `;

  const doc = new Document({
    sections: [
      {
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: "Malware Test File:",
                bold: true,
              }),
              new TextRun({
                text: eicarString.trim(),
                color: "FF0000", // Highlight in red to simulate suspicious content
              }),
            ],
          }),
        ],
      },
    ],
  });

  // Convert the `.docx` content to a binary buffer
  const buffer = await Packer.toBuffer(doc);

  // Step 2: Create a FormData object and append the `.docx` file
  const formData = new FormData();
  formData.append("file", buffer, {
    filename: "eicar.docx",
    contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  });

  // Step 3: Send the `.docx` file to the server using Axios
  try {
    const response = await axios.post("http://localhost:8081/v1/uploadfile/", formData, {
      headers: {
        ...formData.getHeaders(),
        "learning-id": "67517845e9a539224809d12b",
        "x-origin": "content-creation-front-end",
        Referer: "http://localhost:8080/",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
    });

    console.log("File uploaded successfully:", response.data);
  } catch (error) {
    console.error("Error uploading file:", error.response ? error.response.data : error.message);
  }
}

uploadDocxFile();


const JSZip = require("jszip");
const { Document, Packer, Paragraph, TextRun } = require("docx");
const fs = require("fs");

async function createDocxWithEicar() {
  const eicarString = `
    X5O!P%@AP[4\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*
  `;

  // Step 1: Generate a simple .docx file
  const doc = new Document({
    sections: [
      {
        children: [
          new Paragraph({
            children: [
              new TextRun("This is a test document."),
            ],
          }),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);

  // Step 2: Load the .docx file as a ZIP archive
  const zip = await JSZip.loadAsync(buffer);

  // Step 3: Inject the EICAR string into the `document.xml`
  const documentXml = await zip.file("word/document.xml").async("string");
  const modifiedXml = documentXml.replace(
    "</w:body>",
    `<w:p><w:r><w:t>${eicarString.trim()}</w:t></w:r></w:p></w:body>`
  );
  zip.file("word/document.xml", modifiedXml);

  // Step 4: Repackage the .docx file
  const modifiedBuffer = await zip.generateAsync({ type: "nodebuffer" });
  fs.writeFileSync("eicar.docx", modifiedBuffer);

  console.log("Modified .docx file created: eicar.docx");
}

createDocxWithEicar();