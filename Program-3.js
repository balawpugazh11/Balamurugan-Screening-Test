/*  
Problem-3: With a single integer as the input, generate the following until a = x [series of numbers as shown in below examples]
 
  Output: (examples)
    1) input a = 1, then output : 1
    2) input a = 2, then output : 1
    3) input a = 3, then output : 1, 3, 5
    4) input a = 4, then output : 1, 3, 5
    5) input a = 5, then output : 1, 3, 5, 7, 9
    6) input a = 6, then output : 1, 3, 5, 7, 9
    .
    .
    7) input a = x, then output : 1, 3, 5, 7, .......
*/
function OddNumbers(a) {
  //function to findout odd numbers
  let count = a; //initialize count with a
  if (a % 2 == 0) {
    //check if a is even
    count = a - 1; //decrement count by 1 if a is even
  }

  let result = []; //initialize result array
  for (let i = 0; i < count; i++) {
    //loop until count
    result.push(2 * i + 1); //push odd numbers to result array
  }
  return result; //return result array
}

console.log(OddNumbers(1)); //example
console.log(OddNumbers(2)); //example
console.log(OddNumbers(3)); //example
console.log(OddNumbers(4)); //example
console.log(OddNumbers(5)); //example
