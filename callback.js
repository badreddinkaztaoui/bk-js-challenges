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

// const cities = {
// London: 'LONDON',
// LA: 'Los Angeles',
// Paris: 'PARIS',
// };
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
// const isOdd = function(num) { return num % 2 === 1; };
// console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
// console.log(majority([2, 3, 4, 5], isOdd)); // should log: false
