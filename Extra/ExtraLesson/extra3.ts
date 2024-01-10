// type ofについて

const num: number = 0;
type T = typeof num;
const foo: T = 123;
const obj = {
  foo: 123,
  bar: "hi",
};

type L = typeof obj;
const obj2 = {
  foo: 234,
  bar: "",
};

// key ofについて

type Human = {
  name: string;
  age: number;
};

type HumanKey = keyof Human;
let key: HumanKey = "name";
key = "age";
// 型 '"hoge"' を型 'keyof Human' に割り当てることはできません。
// key = "hoge";

// typeofとkeyofを合体
const mmConversionTable = {
  mm: 1,
  m: 1e3,
  km: 1e6,
};

function convertUnits(value: number, unit: keyof typeof mmConversionTable) {
  const mmValue = value * mmConversionTable[unit];
  return {
    mm: mmValue,
    m: mmValue / 1e3,
    km: mmValue / 1e6,
  };
}

console.log(convertUnits(5600, "m"));
