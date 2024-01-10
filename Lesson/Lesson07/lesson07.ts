type If<C extends boolean, T, F> = C extends true ? T : F;

type A = If<true, "a", "b">; // expected to be 'a'
type B = If<false, "a", "b">; // expected to be 'b'

const condition1: true = true;
const condition2: false = false;

const resultA: If<typeof condition1, "a", "b"> = "a";
const resultB: If<typeof condition2, "a", "b"> = "b";

console.log(resultA); // 出力: 'a'
console.log(resultB); // 出力: 'b'
