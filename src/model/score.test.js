const Score = require('./score'); 

describe("Score", () => {
    let score;

    beforeEach(() => {
        score = Score(1);
    });

    test('should return 1', () => {
        expect(score.getScore()).toBe(1);
    })
})