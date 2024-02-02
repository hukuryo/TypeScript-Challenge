const names = ["sato", "suzuki", "ito"] as const;

type Names = (typeof names)[number];

const ttt: Names = "sato";
console.log(ttt);
