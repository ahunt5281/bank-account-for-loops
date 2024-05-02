
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  let wrongFund = [];

  for (let i = 0; i < array.length; i++) {
    let depositSum = 0;
    let withdrawalSum = 0;
    if (array[i].deposits) {
      if (Array.isArray(array[i].deposits)) {
        for (let deposit of array[i].deposits) {
          depositSum += deposit;
        }
      } else {depositSum = deposits}
    }else {depositSum = 0}

    if (array[i].withdrawals) {
      if (Array.isArray(array[i].withdrawals)) {
        for (let withdrawal of array[i].withdrawals) {
          withdrawalSum += withdrawal;
        }
      } else {withdrawalSum = withdrawals}
    }else {withdrawalSum = 0}

    if ((depositSum - withdrawalSum) != array[i].balance) {
      wrongFund.push(array[i]);
    }
  }
  return wrongFund;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
