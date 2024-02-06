type T = Readonly<{
  name: string;
  age: number;
}>;

// Tは{
//   readonly name: string;
//   readonly age: number;
// }

const person: T = {
  name: "Alice",
  age: 30,
};

// エラー: 'name' プロパティは読み取り専用です
// person.name = "Bob";

// エラー: 'age' プロパティは読み取り専用です
// person.age = 31;
