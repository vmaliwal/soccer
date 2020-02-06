jest.mock('./util/readFileStream');
const data = require('./matchesData');

const readFile = require('./util/readFileStream');

describe('Match Data', () => {
    test('should call to fetch file', async () => {
        await data();
        expect(readFile).toHaveBeenCalledTimes(1)
    });

    // No way to catch the error for async iterator as of now
    // Ref: https://nodejs.org/api/readline.html#readline_rl_symbol_asynciterator
    //Also - https://github.com/nodejs/node/issues/30831
    test.skip('should throw error for file not found', async () => {
        const fileName = 'sfts';
        try {
            await data(fileName)
        } catch(e) {
            expect(e).toBe("ENOENT")
        }
    })
})