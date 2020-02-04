/**
 * Hold information about the team and total points at various stages of the game
 * @param {String} teamName 
 */
function Team(teamName) {
    let name = teamName;

    let seasonTotalPoints = 0;

    function getName() {
        return name;
    }

    function getSeasonTotalPoints() {
        return seasonTotalPoints;
    }

    function updateSeasonTotalPoints(points) {
        seasonTotalPoints += points;
    }

    return {
        getName,
        getSeasonTotalPoints,
        updateSeasonTotalPoints
    }
}

module.exports = Team;