class Calculator {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add() {
    return this.x + this.y;
  }

  substract() {
    return this.x - this.y;
  }

  multiply() {
    return this.x * this.y;
  }

  divide() {
    return this.x / this.y;
  }
}


let calculate = new Calculator(4,2);

console.log(calculate.add());
console.log(calculate.substract());
console.log(calculate.multiply());