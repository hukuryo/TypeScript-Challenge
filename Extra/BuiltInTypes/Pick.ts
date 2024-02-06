type Q = Pick<
  {
    name: string;
    age: number;
  },
  "age"
>;

type O = Pick<
  {
    name: string;
    age: number;
  },
  "age" | "name"
>;

// Qは{
//  age: number;
// }

const objQ: Q = {
  age: 30,
};

const obj: O = {
  name: "sato",
  age: 40,
};

// エラー: 'name' プロパティは存在しません
// obj.name = "Alice";

console.log(obj.age); // => 40
