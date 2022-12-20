/*1.	Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]
*/

var duplicates = function (a, b) {
  var c = [];
  for (var i = 0; i < a.length; i++) {
    c[c.length] = a[i];
    c[c.length] = b[i];
  }
  return c;
};

console.log(duplicates([2, 4, 7, 11, -2, 1], [2, 4, 7, 11, -2, 1]));

var duplicates = (function (arr) {
  var newarr = [];
  for (var i = 0; i < arr.length; i++) {
    newarr.push(arr[i]); // newarr[newearr.length]
    newarr.push(arr[i]);
  }
  return newarr;
})([2, 4, 7, 11, -2, 1]);

console.log(duplicates);

/*2.	Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13] 
 */

/*3.	
a.	Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true

 
b.	Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4
 */

function checkNumber(arr, cb) {
  var l = arr.length;
  cb(l);
  return cb();
}

var a = checkNumber([1, 2, 9, 2, 1], function (b) {
  if (b % 2 !== 0) {
    return true;
  } else {
    return false;
  }
});

console.log(a);

/*6.	
a.	Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,
	[
{name: ‘apples’, price: 100}, 
{name: ‘milk’, price: 80}, 
{name:’bananas’, price: 150}
]
b.	Write a function that calculates the total price of your shopping list. 
c.	Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals. 
d.	Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase. 
*/

var products = [
  { name: "apples", price: 100 },
  { name: "milk", price: 80 },
  { name: "bananas", price: 150 },
];

function totalPrice(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i].price;
  }
  return sum;
}
console.log(totalPrice(products));

function averagePrice(arr) {
  var average = 0;
  arr.forEach((element) => {
    average += element.price / arr.length;
  });
  return average.toFixed(3);
}
console.log(averagePrice(products));

function mostExpensive(arr) {
  var max = 0;
  arr.forEach((element) => {
    max = Math.max(element.price);
  });
  var findName = arr.find((element) => (element.price = max));
  return findName.name.toUpperCase();
}

console.log(mostExpensive(products));

/*7.	
a.	Write a function that checks if a given string is written in all capitals.
b.	Write a function that checks if a given string contains any digits.
c.	Write a function that checks if a given string is a valid hexadecimal color.
d.	Write a function that checks if a given number belongs to the interval from 1900 to 2018. 
e.	Write a function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).
 */

function checkIfCapitals(string) {
  if (string.toUpperCase() === string) {
    return true;
  }
  return false;
}
console.log(checkIfCapitals("nebo"));

function ifContainNumber(string) {
  return /[0 -9]/.test(string);
}

console.log(ifContainNumber("nebojsa"));

var reg = /^#([0-9a-f]{3}){1,2}$/i;
console.log(reg.test("#ABC")); //true
console.log(reg.test("#AABBCC")); //true

function interval(number) {
  min = 1900;
  max = 2018;
  return (number - min) * (number - max) <= 0;
}

console.log(interval(200));

function Validator(stringV, passwordV, yearV) {
  this.stringValidator = checkIfCapitals(stringV);
  this.passwordValidator = ifContainNumber(passwordV);
  this.yearValidator = interval(yearV);
}
var resultV = new Validator("Nebojsa", "skjkl553", 1995);
console.log(resultV);
