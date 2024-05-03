// EXERCISE 4
// Return the MIN and the MAX value in the given array of numbers
// findMinValueInArray([2, 45, 32, 3, 0, 46, 12]) => 0
// findMaxValueInArray([2, 45, 32, 3, 0, 46, 12]) => 46

export function findMinValueInArray(array) {
 
  let lowBall = 100;
  for (let i of array) {
    if (i < lowBall) {
      lowBall = i;
    }
  }
  return lowBall;
}

export function findMaxValueInArray(array) {
  let bigMoney = 0;
  for (let i of array) {
    if (i > bigMoney) {
      bigMoney = i;
    }
  }
  return bigMoney;
} 

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
