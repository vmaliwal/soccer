const readline = require('readline');

/**
 * Return an Readline Interface for provided stream
 * @param {Stream} stream  
 * 
 * @returns Interface
 */
function readLines(stream) {
    return readline.createInterface({
        input: stream,
        terminal: false
    });
}

module.exports = readLines