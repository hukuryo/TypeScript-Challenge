var ranges = function (min, max) {
    var result = [];
    for (var i = min; i <= max; i++) {
        result.push(i);
    }
    return result;
};
console.log(ranges(5, 10));
var calcBMI = function (human) {
    return human.height / Math.pow(human.weight, 2);
};
var kota = {
    height: 172,
    weight: 93
};
console.log(calcBMI(kota));
var sums = function (base) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var result = base * 100;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var num = args_1[_a];
        result += num;
    }
    return result;
};
console.log(1, 10, 100);
console.log(123, 456);
var toLowerOrUpper = function (str, upper) {
    if (upper === void 0) { upper = false; }
    if (upper) {
        return str.toUpperCase();
    }
    else {
        return str.toLowerCase();
    }
};
console.log(toLowerOrUpper("Hello"));
console.log((toLowerOrUpper("Hello", false)));
console.log((toLowerOrUpper("Hello", true)));
