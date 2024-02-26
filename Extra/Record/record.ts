type prefectures = "Tokyo" | "Chiba" | "Saitama" | "Shiga";

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cased: number;
  large: string;
};

const Covid19Japan: Record<prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: "東京", confirmed_cased: 1900, large: "2000km" },
  Chiba: { kanji_name: "千葉", confirmed_cased: 200, large: "2000km" },
  Saitama: { kanji_name: "埼玉", confirmed_cased: 500, large: "2000km" },
  Shiga: { kanji_name: "滋賀", confirmed_cased: 70, large: "2000km" },
};

console.log(Covid19Japan);