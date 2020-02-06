const { gamesData } = require('../data/');
const { Team, Game, Score } = require('../model/');


/**
 * Brain of the app that identifies winners & losers
 */
function MatchService() {
    let matchDay = 0;
    const teamsObj = {};

    const TOTAL_TEAMS = 6;
    const TOTAL_GAMES_PER_DAY = TOTAL_TEAMS / 2;
    
    /**
     *
     * @returns {Promise<Object>} Object of teams organized by day with total points on that day
     */
    async function results() {

        let i = 0;
        const matches = {};
    
        for await(match of gamesData()) {
            const sanitizedMatch = _sanitizeStream(match);

            const [teamName1, teamScore1, teamName2, teamScore2] = sanitizedMatch;

            const team1 = _createTeam(teamName1);
            const team2 = _createTeam(teamName2);
    
            const score1 = Score(teamScore1);
            const score2 = Score(teamScore2);

            if ((i++ % TOTAL_GAMES_PER_DAY) === 0) {
                matchDay += 1;
            }
    
            const game = Game({ 
                teams:[team1, team2], 
                scores:[score1, score2],
                day: matchDay
            });

            const result = game.getGameResult();
            let {won, lost, winPoints, lostPoints} = result;
    
            won.updateSeasonTotalPoints(winPoints);
            lost.updateSeasonTotalPoints(lostPoints);
    
            won = {
                ...won,
                points: won.getSeasonTotalPoints()
            }
    
            lost = {
                ...lost,
                points: lost.getSeasonTotalPoints()
            }

            if (!(matchDay in matches)) matches[matchDay] = [];

            matches[matchDay].push(won);
            matches[matchDay].push(lost);
    
        }

        return Promise.resolve(matches);

    }

    /**
     * Split a stream of string into managable arrays
     * @param {Stream} line 
     */
    function _sanitizeStream(line) {
        const gameDecision = line.split(',');
        const gameDecisionArr = gameDecision.flatMap(game => game.match(/(\d+|[^\d]+)/g).map(g => g.trim()));
    
        return gameDecisionArr;   
    }

    /**
     * A factory function to manage team objects
     * @param {String} teamName
     * @returns {Team} 
     */
    function _createTeam(teamName) {
        if (teamName in teamsObj) return teamsObj[teamName];

        const team = Team(teamName);
        teamsObj[teamName] = team;

        return team;
    }

    return {
        results,
        _sanitizeStream
    }

}

module.exports = MatchService