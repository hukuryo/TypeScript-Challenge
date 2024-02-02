const names = ["sato", "suzuki", "ito"] as const;

type Names = (typeof names)[number];
