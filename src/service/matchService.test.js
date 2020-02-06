const matchService = require('./matchService');

const {Team} = require('../model')

describe('Match Service', () => {

    let service;

    beforeEach(async () => {
        service = await matchService();
    })

    test('creates team obj with points', async() => {
        
        const { results } = service;
        const matches = await results();

        const team = matches["1"][0];

        const teamObj = Team("foo")
        teamObj.points = 1;

        // https://github.com/facebook/jest/issues/8475#issuecomment-537830532

        expect(JSON.stringify(team)).toEqual(JSON.stringify(teamObj)); 
    });

    test('sanitizes given string from the file correctly', () => {
        const { _sanitizeStream } = service;
        const testString = "San Jose Earthquakes 3, Santa Cruz Slugs 3"
        const output = [ 'San Jose Earthquakes', '3', 'Santa Cruz Slugs', '3' ];

        const arr = _sanitizeStream(testString);

        expect(arr).toEqual(output);
    })
})