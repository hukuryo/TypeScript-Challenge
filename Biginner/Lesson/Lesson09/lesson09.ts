type Concat<T extends any[], U extends any[]> = [...T, ...U];
type Result = Concat<[1], [2]>;

const block: Concat<[1, 2], [3, 4]> = [1, 2, 3, 4];
