var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function setAge(human, age) {
    return __assign(__assign({}, human), { age: age });
}
var ryohei = {
    type: "human",
    name: "hukuryo",
    age: 25
};
var ryohei2 = setAge(ryohei, 25);
console.log(ryohei2);
