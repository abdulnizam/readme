mkdir playwright-project
cd playwright-project
npm init -y

npm install @playwright/test --save-dev


npx playwright install


// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests', // Test files location
  use: {
    baseURL: 'http://localhost:8080', // Replace with your app URL
    browserName: 'chromium', // Can be 'chromium', 'firefox', 'webkit'
    trace: 'on', // Enable trace to debug issues
  },
});


mkdir tests
touch tests/file-upload.spec.js


const { test, expect } = require('@playwright/test');
const fs = require('fs');

test.describe('File Upload Test with EICAR', () => {
  test('Should upload EICAR test file and detect malware', async ({ page }) => {
    // Create the EICAR test file dynamically
    const eicarContent = `
      X5O!P%@AP[4\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*
    `;
    const fileName = 'eicar.txt';
    fs.writeFileSync(fileName, eicarContent.trim());

    // Navigate to the upload page
    await page.goto('/upload'); // Replace with your upload page URL

    // Upload the file
    const fileInput = await page.locator('input[type="file"]');
    await fileInput.setInputFiles(fileName);

    // Click the upload button
    await page.click('#uploadButton'); // Replace with your button ID or selector

    // Intercept the file upload request and validate the response
    await page.route('http://localhost:8081/v1/uploadfile/', (route) => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ infected: true }), // Mock response
      });
    });

    // Wait for the UI to reflect the malware detection result
    await expect(page.locator('text=Malware detected!')).toBeVisible();

    // Cleanup the test file
    fs.unlinkSync(fileName);
  });
});



"scripts": {
  "test": "npx playwright test"
}


 await page.click('[data-testid="radio-option-1"]'); // Replace with your radio button's data-testid
    await page.click('[data-testid="next-button"]'); // Proceed to the next page
    await page.waitForSelector('[data-testid="text-field-page"]'); // Wait for the next page to load

    // Step 2: Fill out text fields
    await page.fill('[data-testid="text-field-1"]', 'Test User'); // Replace with your text field's data-testid
    await page.fill('[data-testid="text-field-2"]', 'test@example.com'); // Replace with another text field's data-testid
    await page.click('[data-testid="next-button"]'); // Proceed to the next page
    await page.waitForSelector('[data-testid="file-upload-page"]'); // Wait for the next page to load



const { test, expect } = require('@playwright/test');

test.describe('Multi-Step Form Test with On-the-Fly Upload', () => {
  test('Should upload EICAR test file and detect malware', async ({ page }) => {
    // Create the EICAR test file content as a buffer
    const eicarContent = `
      X5O!P%@AP[4\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*
    `;
    const fileName = 'eicar.txt';

    // Navigate to the upload page
    await page.goto('/upload'); // Replace with your upload page URL

    // Upload the file directly from memory
    const fileInput = await page.locator('input[type="file"]');
    await fileInput.setInputFiles({
      name: fileName,
      mimeType: 'text/plain',
      buffer: Buffer.from(eicarContent.trim()),
    });

    // Click the submit button
    await page.click('[data-testid="next-button"]'); // Replace with your button's data-testid

    // Verify the response or final page
    await expect(page.locator('text=Malware detected!')).toBeVisible(); // Verify malware detection message
  });
});