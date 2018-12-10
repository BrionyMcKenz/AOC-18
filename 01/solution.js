const fs = require('fs');
const input = fs.readFileSync('./input.txt', { encoding: 'utf8' });

let inputArray = input.split('\n').map((n) => {
    return Number(n);
});

const partA = (inputArray) => {
    let resultingFrequency = 0;
    for (const freqency of inputArray) {
        resultingFrequency += freqency;
    }
    return resultingFrequency;
}


const partB = (inputArray) => {
    let currentFrequency = 0;
    const foundFrequencies = {};
    let duplicateFound;

    while (!duplicateFound) {
        for (const frequency of inputArray) {
            currentFrequency += frequency;
            if (foundFrequencies[currentFrequency]) {
                duplicateFound = true;
                return currentFrequency;
            } else {
                foundFrequencies[currentFrequency] = true;
            }
        }
    }
};

// RESULT
console.log('Part A: ' + partA(inputArray));
console.log('Part B: ' + partB(inputArray));