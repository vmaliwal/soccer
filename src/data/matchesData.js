const fs = require('fs');
const path = require('path');
const readFile = require('./util/readFileStream');

const getInputFilePath = (fileName='sample-input.txt') => path.join(__dirname, fileName);

/**
 * Read provided data file with. 
 * *Note* no way to handle errors for async iterators, but we still have try catch for future. Refer: https://github.com/nodejs/node/issues/30831
 */ 
function createMatchStream(inputFilePath=getInputFilePath()) {
    try {
        const stream = fs.createReadStream(inputFilePath);
        return readFile(stream)
    } catch {
        throw new Error("File not found");
    }
}

module.exports = createMatchStream
