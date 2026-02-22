import fs from 'fs';

// Read the base64 encoded file
const base64 = fs.readFileSync('js-base64-output.txt', 'utf-8').trim();

// Note: This script would upload via WordPress REST API
// For now, we'll use the MCP upload_media function
console.log('Base64 file read successfully');
console.log('Length:', base64.length);
console.log('First 100 chars:', base64.substring(0, 100));

// Export for use
export const fileBase64 = base64;

