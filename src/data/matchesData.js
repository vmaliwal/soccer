const fs = require('fs');
const path = require('path');
const inputFilePath = path.join(__dirname, 'sample-input.txt');

const readFile = require('./util/readFileStream');

/**
 * 
 */ 
function createMatchStream() {
    const stream = fs.createReadStream(inputFilePath);
    return readFile(stream)
}

module.exports = createMatchStream
