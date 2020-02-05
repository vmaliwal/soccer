const fs = require('fs');
const path = require('path');
const inputFilePath = path.join(__dirname, 'sample-input.txt');

const readFile = require('./util/readFileStream');

/**
 * 
 */ 
function createMatchStream() {
    try {
        const stream = fs.createReadStream(inputFilePath);
        return readFile(stream)
    } catch {
        throw new Error("File not found");
    }
}

module.exports = createMatchStream
