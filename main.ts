import { mkdirSync, writeFileSync } from "node:fs";

// One funny line pitching a terrible pizza topping, written fresh for
// make.fun's "The Worst Pizza Topping" bounty (under 200 characters).
const LINE =
  "Try our new pizza, topped with one soggy gym sock and a single anchovy in a tiny life jacket \u2014 crispy crust, zero dignity, free tetanus shot with every slice.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
