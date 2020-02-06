const { Game, Team, Score } = require('./');

describe('Game', () => {
    let game;
    let team1, team2, teams;
    let score1, score2, scores;
    let day = 3;

    beforeEach(() => {
        team1 = Team("Foo");
        team2 = Team("Bar")
        teams = [team1, team2];

        score1 = Score(1);
        score2 = Score(2);

        scores = [score1, score2];

        game = Game({teams, scores, day});
    });

    test('winner to be Team2: Bar', () => {
        expect(game.getGameResult().won).toBe(team2);
    });

    test('check matchDay to be 3', () => {
        expect(game.getMatchDay()).toBe(day);
    });
    
})