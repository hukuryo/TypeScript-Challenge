type First<T extends any[]> = T extends [infer U, ...any[]] ? U : never;

type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type head1 = First<arr1>;
type head2 = First<arr2>;
const arr: arr1 = ["a", "b", "c"];
