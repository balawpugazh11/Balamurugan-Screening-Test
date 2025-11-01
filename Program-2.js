/*Problem-2: With a single integer as the input, generate the following until a = x [series of numbers as shown in below examples]
 
  Output: (examples)
    1) input a = 1, then output : 1
    2) input a = 2, then output : 1, 3
    3) input a = 3, then output : 1, 3, 5
    4) input a = 4, then output : 1, 3, 5, 7
    .
    .
    5) input a = x, then output : 1, 3, 5, 7, .......*/

function oddnumbers(a) {
  //function to find odd numbers
  let result = []; //initialize result array
  for (let i = 0; i < a; i++) {
    //loop until a
    result.push(2 * i + 1); //push odd numbers to result array
  }
  return result; //return result array
}

//example
console.log(oddnumbers(1)); //example
console.log(oddnumbers(2)); //example
console.log(oddnumbers(3)); //example
console.log(oddnumbers(4)); //example
console.log(oddnumbers(5)); //example
