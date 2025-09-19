const sayHello = function () {
  console.log("Hello!");
};

function greet(fn) {
  fn();
}
greet(sayHello);

function outer() {
  return function inner() {
    console.log("I am inner function!");
  };
}

const result = outer();
result();
