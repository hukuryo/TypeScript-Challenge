// type ofについて
var num = 0;
var foo = 123;
var obj = {
    foo: 123,
    bar: "hi",
};
var obj2 = {
    foo: 234,
    bar: "",
};
var key = "name";
key = "age";
// 型 '"hoge"' を型 'keyof Human' に割り当てることはできません。
// key = "hoge";
// typeofとkeyofを合体
var mmConversionTable = {
    mm: 1,
    m: 1e3,
    km: 1e6,
};
function convertUnits(value, unit) {
    var mmValue = value * mmConversionTable[unit];
    return {
        mm: mmValue,
        m: mmValue / 1e3,
        km: mmValue / 1e6,
    };
}
console.log(convertUnits(5600, "m"));
