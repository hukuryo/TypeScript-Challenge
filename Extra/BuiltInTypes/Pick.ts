type Human = {
  name: string;
  age: number;
  adress: string
}

type Q = Pick<
  Human,
  "age" | "adress"
>;

type O = Pick<
  Human,
  "age" | "name"
>;

const objQ: Q = {
  age: 10,
  adress: "sample"
};

const obj: O = {
  name: "sato",
  age: 40,
};
