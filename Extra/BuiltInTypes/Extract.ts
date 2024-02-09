type Union4 = "hukuryo" | "kenta" | 1 | 2 | 3;

type ExtractString = Extract<Union4, string>;

const union4: ExtractString = "hukuryo";
const union5: ExtractString = "kenta";
// エラー
// const union1: ExtractString = 1;
// const union2: ExtractString = 2;
// const union3: ExtractString = 3;

type ExtractNumber = Extract<Union4, number>

const union6: ExtractNumber = 1
const union7: ExtractNumber = 2
const union8: ExtractNumber = 3

// エラー
// const union10: ExtractNumber = "hukuryo";
// const union9: ExtractNumber = "kenta";