const removeFromArray = function(array, ...argsToBeRemoved) {
    newArray = []
    for (const val of array) {
        if (!argsToBeRemoved.includes(val)) {
            newArray.push(val);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
