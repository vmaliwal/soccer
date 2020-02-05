const { matchService, matchResultDisplayService} = require('./src/service/');

/**
 * Entry point
 */
const main = async () => {
    const { results } = await matchService();
    const matches = await results();
    
    const { display } = await matchResultDisplayService(matches);
    const output = await display();

    console.log(output);
    
}

module.exports.init = main();