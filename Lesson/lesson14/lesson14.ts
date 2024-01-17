type Pop<T> = T extends [...infer U, infer _] ? U : never;

type arr3 = ["a", "b", "c", "d"];
type arr4 = [3, 2, 1];

type re1 = Pop<arr1>; // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2>; // expected to be [3, 2]
