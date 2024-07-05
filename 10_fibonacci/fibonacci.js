const fibonacci = function(nthFibococi) {
    if (nthFibococi < 0) {
        return "OOPS"
    }
    else if (nthFibococi == 0) {
        return 0;
    }

    let num1 = 1, num2 = 1, num3;
    for (let i = 2; i < nthFibococi; i++) {
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
    }
    return num3 || num2;
};

// Do not edit below this line
module.exports = fibonacci;
