/*1.	Find the min and max element in the following array and switch their places. Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]*/

function minAndMax(arr) {
  var arr2 = [];
  var min = arr[0];
  var max = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (min > arr[i]) min = arr[i];
    if (max < arr[i]) max = arr[i];
  }
  console.log(min, max);
  for (i = 0; i < arr.length; i++) {
    var l = arr[i];
    if (arr[i] === min) {
      l = max;
    }
    if (arr[i] === max) {
      l = min;
    }
    arr2[arr2.length] = l;
  }
  return arr2;
}
var result = minAndMax([3, 500, 12, 149, 53, 414, 1, 19]);
console.log(result);

function minAndMax(arr) {
  var newArr = [];
  var min = arr[0];
  var max = arr[0];
  var temp;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }
  for (var i = 0; i < arr.length; i++) {
    l = arr[i];
    if (arr[i] === min) {
      l = max;
    }
    if (arr[i] === max) {
      l = min;
    }
    newArr[newArr.length] = l;
  }
  return newArr;
}

console.log(minAndMax([3, 500, 12, 149, 53, 414, 1, 19]));
/*2.	Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]*/

function dividingValues(arr) {
  var result = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
      result[result.length] = 20;
    } else result[result.length] = arr[i] / 2 + 5;
  }
  return result;
}
console.log(dividingValues([3, 500, -10, 149, 53, 414, 1, 19]));

function newArray(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
      newArr[i] = 20;
    } else {
      newArr[newArr.length] = arr[i] / 2 + 5;
    }
  }
  return newArr;
}

console.log(newArray([3, 500, -10, 149, 53, 414, 1, 19]));

/*3.	Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names with their corresponding grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input: 
[ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output: 
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.*/

function correspondingGrade(grade) {
  if (grade >= 51 && grade < 60) return 6;
  if (grade >= 61 && grade < 70) return 7;
  if (grade >= 71 && grade < 80) return 8;
  if (grade >= 81 && grade < 90) return 9;
  if (grade > 91 && grade < 100) return 10;
  return "Failed to complete the exam";
}
function studentGrade(grade, student) {
  var result = [];
  for (i = 0; i < grade.length; i++) {
    console.log(correspondingGrade(grade[i]));
    result[result.length] =
      student[i] +
      " aquired " +
      grade[i] +
      " pionts " +
      " and " +
      correspondingGrade(grade[i]);
  }
  console.log(result);
}

studentGrade(
  [50, 39, 63, 72, 99, 51, 83, 59],
  ["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"]
);

/*4. (skip :))Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array&#39;s values multiplied by 2.Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]/*/

var arr = [13, 11, 15, 5, 6, 1, 8, 12];
function sortMulty(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var el = arr[i] * 2;
    newArr.push(el);
  }
  return sortAccend(newArr);
}
function sortAccend(arr, length = arr.length) {
  var newArr = arr;
  if (length === 1) {
    return;
  }
  var curEl;
  var nextEl;
  for (var i = 0, j = 1; i < arr.length; i++, j++) {
    curEl = i;
    nextEl = j;
    if (newArr[curEl] > newArr[nextEl]) {
      var switchEl = newArr[curEl];
      newArr[i] = arr[nextEl];
      newArr[nextEl] = switchEl;
    }
  }
  sortAccend(newArr, length - 1);
  return newArr;
}
var x = sortMulty(arr);
console.log(x, "Sorted");

/*5.	(skip :))Sort a previously defined array in a descending order and display it in the console.
Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]*/

var arr = [13, 11, 15, 5, 6, 1, 8, 12];
function sortDec(arr, length = arr.length) {
  console.log(length);
  var newArr = arr;
  if (length === 1) {
    return;
  }
  var curEl;
  var nextEl;
  for (var i = 0, j = 1; i < arr.length; i++, j++) {
    curEl = i;
    nextEl = j;
    if (newArr[curEl] < newArr[nextEl]) {
      var switchEl = newArr[curEl];
      newArr[i] = arr[nextEl];
      newArr[nextEl] = switchEl;
    }
  }
  sortDec(newArr, length - 1);
  return newArr;
}
var x = sortDec(arr);
console.log(x);

/*6.	Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.
Output: 2350000*/

/*function x() {
  var even = 0;
  var odd = 0;
  var c;
  for (var i = 0; i <= 1000; i++) {
    if (i % 2 === 0) {
      even += i;
    }
  }
  for (var i = 0; i <= 500; i++) {
    if (i % 2 !== 0) {
      odd += i;
    }
  }
  return (even - odd) * 12.5;
}
var r = x();
console.log(r);*/

function x() {
  var sumEven = 0;
  var sumOdd = 0;
  for (var i = 0, j = 500; i <= 1000; i += 2, j--) {
    sumEven += i;
    if (j % 2 !== 0) {
      sumOdd += j;
    }
  }
  return (sumEven - sumOdd) * 12.5;
}
var a = x();
console.log(a);

/*7.	Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]

Output: AnStJoJoDaMa*/

function letters(y) {
  var arr = "";
  for (var i = 0; i < y.length; i++) {
    if (
      y[i].length > 1 &&
      typeof y[i] !== "number" &&
      typeof y[i] !== "boolean"
    ) {
      arr += y[i][0] + y[i][1];
    }
  }
  return arr;
}
var l = letters([
  "M",
  "Anne",
  12,
  "Steve",
  "Joe",
  "John",
  "David",
  "Mark",
  true,
  "A",
]);
console.log(l);

/*8.	Write a program that takes a string and prints its characters out in reversed order in the console.
Input:  Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB*/

/*9.	Write a program that displays all the combinations of two numbers between 1 and 7. Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).*/

function combinations() {
  var arr = "";
  for (var i = 1; i <= 7; i++) {
    for (var j = 1; j <= 7; j++) {
      if (i !== j) {
        arr += "(" + i + ", " + j + ")";
      }
    }
    arr += "\n";
  }
  return arr;
}
var r = combinations();
console.log(r);

/*10.	Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
Input:  17    | 15
Output: true  | false*/

function isNumberAPrime(n) {
  var result = "The number is a prime number.";
  if (n === 1) result = "The number is not a prime number.";
  else if (n > 1) {
    for (var i = 2; i < n; i++) {
      if (n % i === 0) result = "The number is not a prime number.";
    }
  }
  return result;
}
console.log(isNumberAPrime(15));

/*11.	Check if a given string is a palindrome (spaces are ignored).
Input:  eye  | Geek  | a nut for a jar of tuna
Output: true | false | true*/

function palindrome(string) {
  var result = "";
  for (var i = 0; i < string.length; i++) {
    if (string[i] === string[string.length - 1 - i]) return "Palindrom";
    else return "NOT palindrom";
  }
}
console.log(palindrome("Greek"));

/*12.	Write a program that calculates the greatest common divisor of two integers. Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
Input:  192 42 | 81 9
Output: 6      | 9*/

function findTheGreatestDivisor(n, m) {
  var result;
  if (m < n) {
    for (var i = 0; i <= m; i++) {
      if (m % i === 0 && n % i === 0) result = i;
    }
  }
  if (n < m) {
    for (var i = 0; i <= n; i++) {
      if (m % i === 0 && n % i === 0) result = i;
    }
  }
  return result;
}
console.log(findTheGreatestDivisor(42, 192));
