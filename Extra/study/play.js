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
