/*Problem-1: Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class.
  Calculator inputs :> ‘a’, ‘b’ and ‘type of operation’
  Datatype :> ‘a’ = double, ‘b’ = double, ‘type of operation’ = string */

class calculator {
  //calculator class
  constructor(a, b, operation) {
    //constructor with parameters a, b and operation
    this.a = a; //assigning values to class properties
    this.b = b; //assigning values to class properties
    this.operation = operation; //assigning values to class properties
  }

  calculate(a, b, operation) {
    //calculate method
    switch (
      this.operation //switch case for operation
    ) {
      case "Addition": //addition case
        return this.a + this.b; //return sum of a and b
      case "Subtraction": //subtraction case
        return this.a - this.b; //return difference of a and b
      case "Multiplication": //multiplication case
        return this.a * this.b; //return product of a and b
      case "Division": //division case
        if (this.b === 0) {
          //check for division by zero
          return "Error: Division by zero!"; //return error message
        }
        return this.a / this.b; //return quotient of a and b
      case "Modulus": //modulus case
        return this.a % this.b; //return modulus of a and b
      default:
        return "Invalid operation please try again!"; //default case for invalid operation
    }
  }
}

//example
const calc1 = new calculator(10, 5, "Addition"); //create calculator object
const calc2 = new calculator(10, 5, "Subtraction"); //create calculator object
const calc3 = new calculator(10, 5, "Multiplication"); //create calculator object
const calc4 = new calculator(10, 0, "Division"); //create calculator object
const calc5 = new calculator(10, 5, "Division"); //create calculator object
const calc6 = new calculator(10, 5, "Modulus"); //create calculator object

console.log(calc1.operation, "is" + " " + calc1.calculate()); //print results
console.log(calc2.operation, "is" + " " + calc2.calculate()); //print results
console.log(calc3.operation, "is" + " " + calc3.calculate()); //print results
console.log(calc4.operation, "is" + " " + calc4.calculate()); //print results
console.log(calc5.operation, "is" + " " + calc5.calculate()); //print results
console.log(calc6.operation, "is" + " " + calc6.calculate()); //print results
