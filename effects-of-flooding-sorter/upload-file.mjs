import fs from 'fs';

// Read the base64 encoded file
const base64 = fs.readFileSync('js-base64-output.txt', 'utf-8').trim();

console.log('Read base64 file, length:', base64.length);
console.log('Ready to upload...');

// The base64 string is ready - we'll use it with the MCP upload_media function
export default base64;

