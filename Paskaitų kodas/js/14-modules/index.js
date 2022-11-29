import { sum, mathFive } from "./math.js";
import math from "./math.js";
import { get, post } from "./fetch/index.js";

console.log(sum(5, 3, 4, 6));
console.log(mathFive);

get("https://api.github.com/").then(console.log);
get("https://randomuser.me/api/").then(console.log);
post("https://638500943fa7acb14f071e15.mockapi.io/users/", {
  firstName: "Emilis",
  lastName: "Kiškis",
  dob: "2000-05-12",
  sex: "male",
  acceptedTerms: true
});
