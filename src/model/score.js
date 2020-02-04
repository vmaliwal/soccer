/**
 * Hold score for a team
 * @param {Number} s score
 */
function Score(s=0) {
    let score = s;

    function getScore() {
        return score;
    }

    function setScore(s) {
        score = s;
    }

    return {
        getScore,
        setScore
    }
}

module.exports = Score;