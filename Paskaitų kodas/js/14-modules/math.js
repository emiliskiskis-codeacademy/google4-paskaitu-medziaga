function sum(...params) {
  return params.reduce((acc, val) => acc + val);
}

let x = 5;

export { sum, x as mathFive };

export default {
  sum,
  mathFive: x
};
