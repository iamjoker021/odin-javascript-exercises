const sum1ToN = function(N) {
    // Sum of 1 to N formula
    return N * (N + 1) / 2;
}

const sumAll = function(num1, num2) {

    // Return error if both number is not positive integers
    if (typeof num1 === 'number' && typeof num2 === 'number' && num1 >=0 && num2 >= 0) {
        // Find Sum of N number for Both
        let startNumSum, endNumSum;
        if (num2 > num1) {
            startNumSum = sum1ToN(num1-1);
            endNumSum = sum1ToN(num2);
        }
        else {
            startNumSum = sum1ToN(num2-1);
            endNumSum = sum1ToN(num1);
        }

        // Sum of a to b: [Sum of 1 to b] - [Sum of 1 to a-1]
        return endNumSum - startNumSum;
    }
    else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
