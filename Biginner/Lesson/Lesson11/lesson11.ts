type Includes<T extends readonly any[], U> = U extends T[number] ? true : false;
type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Kars">;

const kars: isPillarMen = true;
