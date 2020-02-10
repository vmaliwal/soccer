const ora = require('ora');

const { matchService, matchResultDisplayService} = require('./src/service/');

/**
 * Entry point
 */
const main = async () => {

    const spinner = ora('Welcome to Soccer League Results').start();

    setTimeout(() => {
        spinner.color = 'yellow';
        spinner.text = 'Ingesting File';    
    }, 2000);
    
    setTimeout(() => {
        spinner.color = 'red';
        spinner.text = 'Sorting Data';
    }, 5000);

    setTimeout( async () => {
        spinner.color = 'green';
        spinner.text = 'Generating Results';
    }, 7000);

    setTimeout( async () => {
        await loadResults();
        spinner.stop();
    }, 10000);
}

const loadResults  = async () => {
    const { results } = await matchService();
    const matches = await results();
    
    const { display } = await matchResultDisplayService(matches);
    const output = await display();

    console.log(output);
}

module.exports.init = main();