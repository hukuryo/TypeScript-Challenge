// Tは{
//   name: string | undefined;
//   age: number| undefined;
// }
var partialPerson = {};
// 'name' プロパティと 'age' プロパティがオプショナルなので、インスタンスを作成する際に指定しなくてもよい
// 'name' と 'age' はどちらも undefined となる
console.log(partialPerson.name); // => undefined
console.log(partialPerson.age); // => undefined
partialPerson.name = "Alice";
partialPerson.age = 30;
console.log(partialPerson.name); // => "Alice"
console.log(partialPerson.age); // => 30
