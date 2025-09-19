function greet(name) {
  return `Hello, ${name}!`;
}

function processUser(fn, value) {
  return fn(value);
}

console.log(processUser(greet, "Borhan"));

function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = multiplier(2);
console.log(double(5));
