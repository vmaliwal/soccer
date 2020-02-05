const Team = require('./team');

describe('Team', () => {
    const teamName = "foo";
    const team = Team(teamName);
    const points = 3;


    test('team name is foo', () => {
        expect(team.getName()).toBe(teamName);
    });

    test('season points to be 3', () => {
        team.updateSeasonTotalPoints(points);
        expect(team.getSeasonTotalPoints()).toBe(points);
    });

    test('season points are incremented by 3', () => {
        team.updateSeasonTotalPoints(points);

        expect(team.getSeasonTotalPoints()).toBe(6);
    })
})