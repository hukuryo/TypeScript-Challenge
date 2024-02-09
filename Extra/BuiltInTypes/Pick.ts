type Q<T> = Pick<
  {
    name: string;
    age: T;
    adress: string
  },
  "age" | "adress"
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

const objQ: Q<number> = {
  age: 10,
  adress: "sample"
};

const obj: O = {
  name: "sato",
  age: 40,
};

// エラー: 'name' プロパティは存在しません
// obj.name = "Alice";

console.log(obj.age); // => 40
