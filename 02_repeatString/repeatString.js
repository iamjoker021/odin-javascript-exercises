const repeatString = function(string, numOfTimes) {
    if (numOfTimes < 0) {
        return 'ERROR'
    }
    return string.repeat(numOfTimes);
};

// Do not edit below this line
module.exports = repeatString;
