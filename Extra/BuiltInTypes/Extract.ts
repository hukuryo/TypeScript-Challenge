type Union4 = "hukuryo" | "kenta" | 1 | 2 | 3;

type ExtractUnion = Extract<Union4, string>;

const union4: ExtractUnion = "hukuryo";
const union5: ExtractUnion = "kenta";
// エラー
// const union1: ExtractUnion = 1;
// const union2: ExtractUnion = 2;
// const union3: ExtractUnion = 3;
