let fs = require('fs');
let readline = require('readline');

const fileheader = '/**\n * @author:\n * @description:\n */';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What you want to implement: ', (algorithm_name) => {
    fs.mkdir(algorithm_name, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(algorithm_name + ' directory created...');
            createAlgorithmFile(algorithm_name, 'index');
            createAlgorithmFile(algorithm_name, 'test');
        }
    });
    rl.close();
});

function createAlgorithmFile(algorithm_name, file_name) {
    fs.writeFile(algorithm_name + '/' + file_name + '.js', fileheader, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(file_name + '.js file created...');
        }
    });
}