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