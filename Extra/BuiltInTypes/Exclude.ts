type Union5 = "hukuryo" | "kenta" | 1 | 2 | 3;

type ExcludeUnion = Exclude<Union5, string>;

const union1: ExcludeUnion = 1;
const union2: ExcludeUnion = 2;
const union3: ExcludeUnion = 3;
// エラー
// const union6: ExcludeUnion = "hukuryo";
// const union7: ExcludeUnion = "kenta";
