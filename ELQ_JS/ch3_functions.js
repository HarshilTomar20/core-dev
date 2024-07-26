// Functions

const square = function(x) {
    return x*x;
}
console.log(square(5));

const makeNoise = function() {
console.log("Pling!");
};

makeNoise();
// → Pling!

const roundTo = function(n, step) {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
};

console.log(roundTo(23, 10));
// → 20

// Binding and Scopes
// Global → scope is the whole program

let x = 10;   // global
if (true) {
  let y = 20; // local to block
  var z = 30; // also global
}

const halve = function(n) {
    return n / 2;
  };
  
let n = 10;
console.log(halve(100));
// → 50

// Nested Scope

const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
      let ingredientAmount = amount * factor;
      if (ingredientAmount > 1) {
        unit += "s";
      }
      console.log(`${ingredientAmount} ${unit} ${name}`);
    };

    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};

hummus(3);