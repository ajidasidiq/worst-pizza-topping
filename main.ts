import { mkdirSync, writeFileSync } from "node:fs";

// One funny line pitching a terrible pizza topping, written fresh for
// make.fun's "The Worst Pizza Topping" bounty (under 200 characters).
const LINE =
  "Try our new pizza, topped with one soggy gym sock and a single anchovy in a tiny life jacket \u2014 crispy crust, zero dignity, free tetanus shot with every slice.";

// Competition gate: 1-200 characters, single line, no leading/trailing
// whitespace, no control characters.
if (!LINE || LINE.length > 200 || /[\r\n]/.test(LINE) || LINE !== LINE.trim()) {
  throw new Error("entry fails the 1-200 character single-line gate");
}
if (/[\u0000-\u001f\u007f]/.test(LINE)) {
  throw new Error("entry contains a control character");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
