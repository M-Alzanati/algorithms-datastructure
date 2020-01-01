const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const scissors = 'scissors';
const paper = 'paper';
const rock = 'rock';
const draw = 'draw';
const game = [];

rl.on('line', (line) => {
    game.push(line);
});

rl.on('close', () => {
    if (!game || game.length < 3) return;
    let gCount = 0,
        pCount = 0;

    for (let i = 0, ctn = game[i]; ctn !== '0'; i += gCount + 1, ctn = game[i]) {
        pCount = parseInt(ctn[0]);
        gCount = parseInt(ctn[2]);

        // define players wining-lose array
        let players = [0];
        for (let j = 0; j < pCount; j++) {
            players.push({
                win: 0,
                lose: 0
            });
        }

        // play games between players
        for (let j = i + 1; j <= (i + gCount); j++) {
            let temp = game[j].split(' ');
            let play1 = temp[0], play2 = temp[2];
            let move1 = temp[1], move2 = temp[3];

            if (play(move1, move2) === move1) {
                players[play1].win += 1;
                players[play2].lose += 1;
            } else if (play(move1, move2) === move2) {
                players[play2].win += 1;
                players[play1].lose += 1;
            } else {
                // nothing
            }
        }

        // print result
        for (let p = 1; p < players.length; p++) {
            console.log(players[p].win / (players[p].win + players[p].lose));
        }
        console.log();
    }
});

var play = function (move1, move2) {
    if ((move1 === scissors && move2 === paper) || (move2 === scissors && move1 === paper)) {
        return scissors;
    } else if ((move1 === scissors && move2 === rock) || (move2 === scissors && move1 === rock)) {
        return rock;
    } else if ((move1 === paper && move2 === rock) || (move2 === paper && move1 === rock)) {
        return paper;
    } else {
        return draw;
    }
};
