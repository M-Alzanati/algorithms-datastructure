const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var chess = [];

rl.on('line', (line) => {
    chess.push(line.split(''));
});

rl.on('close', (cmd) => {
    if(!chess || chess.length < 4) {
        console.log('invalid');
        return;
    }

    var count = 0;
    for (let i = 0; i < chess.length; i++) {
        for (let j = 0; j < chess[i].length; j++) {
            if (chess[i][j] === '*') {
              count += 1;
                if (!isSafe(i, j, chess)) {
                    console.log('invalid');
                    return;
                }
            }
        }
    }

    (count === 8) ? console.log('valid') : console.log('invalid');
    return;
});

function isSafe(i, j, chess) {
  // move right
  for (let k = j + 1; k < chess[i].length; k++) {
      if (chess[i][k] === '*') {
          return false;
      }
  }
  // move down
  for (let k = i + 1; k < chess.length; k++) {
      if (chess[k][j] === '*') {
          return false;
      }
  }
  // move digonal right
  for (let k = i + 1, h = j + 1; k < chess.length && h < chess[i].length; k++, h++) {
      if (chess[k][h] === '*') {
          return false;
      }
  }
  // move digonal left
  for (let k = i + 1, h = j - 1; k < chess.length && h > -1; k++, h--) {
      if (chess[k][h] === '*') {
          return false;
      }
  }

  return true;
}