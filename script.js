'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// //SLICE
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-1));

// //SPLICE
// arr;
// console.log(arr.splice(-1));
// arr;

// arr = ['a', 'b', 'c', 'd', 'e'];

// //REVERSE
// console.log(arr.reverse());

// //Concat

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// console.log(arr1.concat(arr2));

// //Join
// console.log(arr1.join(' - '));
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (let movement of movements) {
  console.log(
    movement > 0
      ? `You deposited ${movement}`
      : `You withdrew ${Math.abs(movement)}`
  );
}

movements.forEach((movement, index, array) => {
  console.log(
    movement > 0
      ? `Movement ${index + 1}: You deposited ${movement}`
      : `Movement ${index + 1}: You withdrew ${Math.abs(movement)}`
  );
});

//Foreach in Map and Set

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => console.log(`${key} ${value}`));

const currenciesUnique = new Set(['USD', 'EUR', 'GBP']);
console.log(currenciesUnique);

currenciesUnique.forEach((value, _, map) => console.log(` ${value}`));
