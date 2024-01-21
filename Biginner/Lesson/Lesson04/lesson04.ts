type Push<T extends any[], U> = [...T, U];

type Result = Push<[1, 2], "3">; // [1, 2, '3']

const result: Result = [1, 2, "3"];

console.log(result);