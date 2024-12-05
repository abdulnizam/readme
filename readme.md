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


describe("File Upload Test with EICAR", () => {
  it("Should upload the EICAR test file and verify the response", () => {
    // Create the EICAR test file content
    const eicarContent = `
      X5O!P%@AP[4\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*
    `;

    // Write the EICAR content to a file in memory
    const fileName = "eicar.txt";
    cy.writeFile(fileName, eicarContent.trim());

    // Visit the upload page
    cy.visit("http://localhost:8080/upload"); // Replace with your UI's upload page

    // Interact with the file input
    cy.get('input[type="file"]').selectFile(fileName, { force: true });

    // Submit the form or trigger upload
    cy.get("#uploadButton").click(); // Replace with the actual button ID

    // Verify the response (Mock or Actual API)
    cy.intercept("POST", "http://localhost:8081/v1/uploadfile/").as("fileUpload");
    cy.wait("@fileUpload").then((interception) => {
      expect(interception.response.statusCode).to.eq(200); // Ensure successful upload
      expect(interception.response.body.infected).to.be.true; // Ensure file is flagged as malware
    });

    // Optional: Verify UI updates after upload
    cy.contains("Malware detected!").should("be.visible");
  });
});