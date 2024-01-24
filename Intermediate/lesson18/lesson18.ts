type Last<T extends any[]> = T extends [...infer _, infer U] ? U : never;

type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type tail1 = Last<arr1>;
type tail2 = Last<arr2>;

const arr11: tail1 = "c"; // 修正された行
