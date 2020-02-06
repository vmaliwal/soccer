const matchDisplayService = require('./matchResultDisplayService');

const { Team } = require('../model')

describe('Match Display Service', () => {

    let service;
    let team1, team2;

    beforeEach(async () => {
        team1 = Team("Felton Lumberjacks");
        team2 = Team("Aptos FC");
        service = await matchDisplayService();
    });

    test('sort functionality sorts team by score in descending order', () => {
        const {_sort} = service; 

        team1.points = 2;
        team2.points = 4;

        const teams = [team1, team2];
        const output = _sort(teams);

        expect(output[0]).toBe(team2);

    });

    test('sort function sorts by team name in ascending', () => {
        const {_sort} = service; 

        team1.points = 4;
        team2.points = 4;

        const teams = [team1, team2];

        const output = _sort(teams);

        expect(output[0].getName()).toBe(team2.getName());

    })
})