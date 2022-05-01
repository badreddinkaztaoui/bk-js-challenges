//! Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

//! Challenge 2
function addS(word) {
  return `${word}s`;
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));

//! Challenge 3
function map(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
}

// console.log(map([1, 2, 3], addTwo));

//! Challenge 4
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

// see for yourself if your forEach works!

//! Challenge 5
function mapWith(array, callback) {
  const result = [];
  array.forEach((num) => {
    result.push(callback(num));
  });
  return result;
}

// console.log(mapWith([1, 2, 3], addTwo));

//! Challenge 6
function reduce(array, callback, initialValue) {
  for (let i = 0; i < array.length; i++) {
    initialValue = callback(initialValue, array[i]);
  }
  return initialValue;
}

// console.log(reduce([4, 5, 3], (a, b) => a + b ,0))
// should log: 12

//! Challenge 7
function intersection(arrays) {
  return arrays
    .shift()
    .filter((number) => arrays.every((array) => array.indexOf(number) !== -1));
}

// console.log(intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));
// should log: [5, 15]

//! Challenge 8
function union(arrays) {
  const nonFungible = [];
  for (let i = 0; i < arrays.length; i++) {
    arrays[i].map((number) => {
      if (!nonFungible.includes(number)) {
        nonFungible.push(number);
      }
    });
  }
  return nonFungible;
}

// console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//! Challenge 9
function objOfMatches(array1, array2, callback) {
  const result = {};
  array1.map((word, index) => {
    if (callback(word) === array2[index]) {
      result[word] = array2[index];
    }
  });
  return result;
}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//! Challenge 10
function multiMap(arrVals, arrCallbacks) {
  const result = {};
  arrVals.map((word) => {
    let value = arrCallbacks.map((methode) => methode(word));
    result[word] = value;
  });
  return result;
}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

//! Challenge 11
function objectFilter(obj, callback) {
  const result = {};
  for (let key in obj) {
    if (callback(key) === obj[key]) {
      result[key] = obj[key];
    }
  }
  return result;
}

const cities = {
  London: "LONDON",
  LA: "Los Angeles",
  Paris: "PARIS",
};
// console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}

//! Challenge 12
function majority(array, callback) {
  let length = array.length / 2;
  let count = 0;
  array.map((number) => {
    if (callback(number)) count++;
  });
  return count > length ? true : false;
}

// /*** Uncomment these to check your work! ***/
const isOdd = function (num) {
  return num % 2 === 1;
};
// console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
// console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

//! Challenge 13
function prioritize(array, callback) {
  const matched = [];
  array.map((word) => {
    if (callback(word)) {
      matched.push(word);
    }
  });
  const result = array.filter((word) => !matched.includes(word));
  matched.reverse().map((word) => result.unshift(word));
  return result;
}

// /*** Uncomment these to check your work! ***/
const startsWithS = function (str) {
  return str[0] === "s" || str[0] === "S";
};
// console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS));
// should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']

//! Challenge 14
function countBy(array, callback) {
  const result = {};
  array.map((number) => {
    if (!result[callback(number)]) {
      result[callback(number)] = 0;
    }
    result[callback(number)] += 1;
  });

  return result;
}

// /*** Uncomment these to check your work! ***/
// console.log(countBy([1, 2, 3, 4, 5], function(num) {
// if (num % 2 === 0) return 'even';
// else return 'odd';
// }));
// should log: { odd: 3, even: 2 }

//! Challenge 15
function groupBy(array, callback) {
  const result = {};
  array.map((number) => {
    if (!result[callback(number)]) {
      result[callback(number)] = [number];
    } else {
      result[callback(number)] = [...result[callback(number)], number];
    }
  });
  return result;
}

// /*** Uncomment these to check your work! ***/
const decimals = [1.3, 2.1, 2.4];
const floored = function (num) {
  return Math.floor(num);
};
// console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

//! Challenge 16
function goodKeys(obj, callback) {
  const result = [];
  for (let key in obj) {
    if (callback(obj[key])) {
      result.push(key);
    }
  }
  return result;
}

// /*** Uncomment these to check your work! ***/
const sunny = {
  mac: "priest",
  dennis: "calculating",
  charlie: "birdlaw",
  dee: "bird",
  frank: "warthog",
};
const startsWithBird = function (str) {
  return str.slice(0, 4).toLowerCase() === "bird";
};
// console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']

//! Challenge 17
function commutative(func1, func2, value) {
  return func2(func1(value)) === func1(func2(value));
}

// /*** Uncomment these to check your work! ***/
const multBy3 = (n) => n * 3;
const divBy4 = (n) => n / 4;
const subtract5 = (n) => n - 5;
// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false

//! Challenge 18
function objFilter(obj, callback) {
  const result = {};
  for (let key in obj) {
    if (callback(key) === obj[key]) result[key] = obj[key];
  }
  return result;
}

// /*** Uncomment these to check your work! ***/
const startingObj = {};
startingObj[6] = 3;
startingObj[2] = 1;
startingObj[12] = 4;
const half = (n) => n / 2;
// console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }

//! Challenge 19
function rating(arrOfFuncs, value) {
  let checkPassedCount = 0;
  arrOfFuncs.map((methode) => {
    if (methode(value)) checkPassedCount++;
  });
  const percentag = 100 * (checkPassedCount / arrOfFuncs.length);
  return percentag;
}

// /*** Uncomment these to check your work! ***/
const isEven = (n) => n % 2 === 0;
const greaterThanFour = (n) => n > 4;
const isSquare = (n) => Math.sqrt(n) % 1 === 0;
const hasSix = (n) => n.toString().includes("6");
const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75

//! Challenge 20
function pipe(arrOfFuncs, value) {
  let currentResult = value;
  arrOfFuncs.map((methode) => {
    currentResult = methode(currentResult);
  });
  return currentResult;
}

// /*** Uncomment these to check your work! ***/
const capitalize = (str) => str.toUpperCase();
const addLowerCase = (str) => str + str.toLowerCase();
const repeat = (str) => str + str;
const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'

//! Challenge 21
function highestFunc(objOfFuncs, subject) {
  let current = subject;
  let result;
  for (let func in objOfFuncs) {
    if (objOfFuncs[func](subject) > current) {
      current = objOfFuncs[func](subject);
      result = func;
    }
  }
  return result;
}

// /*** Uncomment these to check your work! ***/
const groupOfFuncs = {};
groupOfFuncs.double = (n) => n * 2;
groupOfFuncs.addTen = (n) => n + 10;
groupOfFuncs.inverse = (n) => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'

//! Challenge 22
function combineOperations(startVal, arrOfFuncs) {
  let current = startVal;
  arrOfFuncs.map((methode) => {
    current = methode(current);
  });
  return current;
}

function addTen(num) {
  return num + 10;
}

function add100(num) {
  return num + 100;
}

function divByFive(num) {
  return num / 5;
}

function multiplyByThree(num) {
  return num * 3;
}

function multiplyFive(num) {
  return num * 5;
}

// /*** Uncomment these to check your work! ***/
// console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
// console.log(combineOperations(0, [divByFive, multiplyFive, addTen])); // Should output 10

//! Challenge 23
function myFunc(array, callback) {
  let result;
  array.map((number, index) => {
    if (callback(number)) result = index;
  });
  return result || -1;
}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

// function isOdd(num) { //! Already declared in the top
//   return num % 2 !== 0;
// }

// /*** Uncomment these to check your work! ***/
// console.log(myFunc(numbers, isOdd)); // Output should be 1
// console.log(myFunc(evens, isOdd)); // Output should be -1

//! Challenge 24
function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

let sum = 0;

function addToSum(num) {
  sum += num;
}

// /*** Uncomment these to check your work! ***/
const nums = [1, 2, 3];
myForEach(nums, addToSum);
// console.log(sum); // Should output 6
