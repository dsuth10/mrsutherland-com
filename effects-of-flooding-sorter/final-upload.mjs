import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the original JS file and convert to base64
const jsFile = path.join(__dirname, 'dist/assets/index-lXc0ejdT.js');
const fileBuffer = fs.readFileSync(jsFile);
const base64 = fileBuffer.toString('base64');

console.log('File size:', fileBuffer.length, 'bytes');
console.log('Base64 length:', base64.length, 'chars');
console.log('');
console.log('Base64 content ready. The first 100 characters:');
console.log(base64.substring(0, 100));
console.log('');
console.log('This base64 string can now be used with WordPress MCP upload_media function.');
console.log('File should be uploaded with title: "Flooding Sorter App"');
console.log('And should be named: "flooding-sorter-app.js"');

// Export the base64 for potential use
export const uploadBase64 = base64;
export const fileInfo = {
    size: fileBuffer.length,
    base64Length: base64.length,
    base64: base64
};

