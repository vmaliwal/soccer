/**
 * Generate output to be displayed as per rules
 * @param {Array} m game results to be displayed post modifications
 */
function MatchResultDisplayService(m) {

    let matches = m

    /**
     * Generate a report to display on console
     */
    function display() {
        const keys = Object.keys(matches);

        let result = '';

        keys.forEach(matchDay => {
            
            result += `\n`;
            result += `Match Day ${matchDay} \n\n`;
    
            const sortedTeams = _sort(matches[matchDay]);
            const top3teams = sortedTeams.slice(0,3);
    
            top3teams.forEach(team => {
                result += `${team.getName()}, ${team.points} ${(team.pts > 1) ? "pts" : "pt"} \n`;
            })
    
        });

        return Promise.resolve(result);
    }

    /**
     * Sort by points in descending. If points are equal, sort by name in ascending
     * @param {Array} teams 
     */
    function _sort(teams) {
        teams.sort((team1, team2) => {
            if (team1.points > team2.points) return -1;
            else if (team1.points < team2.points) return 1;
            else if (team1.getName() > team2.getName()) return 1;
            else return -1;
        })
        return teams;
    }

    return {
        display,
        _sort
    }

}

module.exports = MatchResultDisplayService;