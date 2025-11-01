/* 
Problem-4: Get the total count of number listed in the dictionary which is multiple of [1,2,3,4,5,6,7,8,9]
  (examples)
  input: [1,2,8,9,12,46,76,82,15,20,30]
  Output: 
    {1: 11, 2: 8, 3: 4, 4: 4, 5: 3, 6: 2, 7: 0, 8: 1, 9: 1}? */

function countMultiples(array) {
  //function to count multiples
  let result = {}; //initialize result object
  for (let i = 1; i <= 9; i++) {
    //loop from 1 to 9
    result[i] = 0; //initialize count for each number to 0
  }

  array.forEach(function (num) {
    // iterate through input array
    for (let i = 1; i <= 9; i++) {
      //loop from 1 to 9
      if (num % i === 0) {
        //check if num is multiple of i
        result[i]++; //increment count for i
      }
    }
  });

  return result; //return result object
}

// Usage example:
const inputArray = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30]; //example input array
console.log(countMultiples(inputArray)); //print result
