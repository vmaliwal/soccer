/**
 * Hold information related to a game played between two teams
 * @param {Object} param0 teams, scores & day 
 */
function Game({ teams, scores, day }) {
    const [team1, team2] = teams;
    const [score1, score2] = scores;

    const matchDay = day;

    const EQUAL = 'EQUAL';
    const WIN_POINTS = 3;
    const LOST_POINTS = 0;
    const TIE_POINTS = 1;

    function getMatchDay() {
        return matchDay;
    }

    /**
     * Returns final result of a game played between two teams.
     * Maybe this should be part of service?
     */
    function getGameResult() {
        const scoreComparision = _compareScores(score1, score2);

        let tW, tL;
        let pW = WIN_POINTS;
        let pL = LOST_POINTS;

        // if there is a tie, team1 is tagged winner. afterall victory is just a tag.
        if (scoreComparision === EQUAL) {
            tW = team1;
            tL = team2;

            pW = TIE_POINTS;
            pL = TIE_POINTS;
        }
        else if (scoreComparision) {
            tW = team1;
            tL = team2;
        } else {
            tW = team2;
            tL = team1;
        }

        return {
            won: tW,
            lost: tL,
            winPoints: pW,
            lostPoints: pL
        }
    }

    function _isTie(s1, s2) {
        return s1 === s2;

    }

    function _compareScores(score1, score2) {
        const s1 = score1.getScore();
        const s2 = score2.getScore();

        if (_isTie(s1, s2)) return EQUAL;
        else return (s1 > s2);
        
    }

    return {
        getGameResult,
        getMatchDay,
        _compareScores
    }
}

module.exports = Game;