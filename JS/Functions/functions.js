/* 1.	Write a program that calculates the maximum of two given numbers. */

function MaximumOfGivenNumber(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Invalid input";
  }
  var result = "";
  if (a > b) {
    result = a;
  } else if (b > a) {
    result = b;
  }
  return result;
}
console.log(MaximumOfGivenNumber(5, 99));

function maximumOfTwoNumber(a, b) {
  if (typeof a !== "number" || typeof b !== "number") return "Invalid imput";
  if (a > b) return a;
  else if (b > a) return b;
}
console.log(maximumOfTwoNumber(99, "a"));

/*2.	Write a program that checks if a given number is odd. */

function IfNumberIsOdd(n) {
  if (typeof n !== "number") {
    return "Invalid input";
  }
  var result = "";
  if (n % 2 !== 0) {
    result = "Odd";
  } else {
    result = "even";
  }
  return result;
}

console.log(IfNumberIsOdd(9));

function ifOddNumber(a) {
  if (typeof a !== "number") return "Invalid imput";
  if (a % 2 !== 0) return "Odd";
  else if (a % 2 === 0) return "Even";
}

console.log(ifOddNumber("55"));

/* 3.	Write a program that checks if a given number is a three digit long number.*/

function IfThreeDigitNumber(n) {
  if (typeof n !== "number") {
    return "Invalid input";
  }
  var result = "";
  if (n > 99 && n < 1000) {
    result = "three digit long number";
  } else {
    result = "is NOT three digit long number";
  }
  return result;
}

console.log(IfThreeDigitNumber(5000));

function threeDigitNumber(a) {
  if (typeof a !== "number") {
    return "Invalid input";
  }
  if (a > 99 && a < 1000) return "three digit long number";
  else return "is NOT three digit long number";
}

console.log(threeDigitNumber(400));

/*4.	Write a program that calculates an arithmetic mean of four numbers. */

function ArithmeticMean(a, b, c, d) {
  if (
    typeof a !== "number" &&
    typeof b !== "number" &&
    typeof c !== "number" &&
    typeof d !== "number"
  ) {
    return "Invalid input";
  }
  var result = "";
  if ((f = a + b + c + d)) {
    result = f / 4;
  }
  return result;
}
console.log(ArithmeticMean(5, 6, 7, 8));

function arithmeticMean(a, b, c, d) {
  if (
    typeof a !== "number" &&
    typeof b !== "number" &&
    typeof c !== "number" &&
    typeof d !== "number"
  ) {
    return "Invalid input";
  }
  if ((e = a + b + c + d)) return (f = e / 4);
}

console.log(arithmeticMean(6, 4, 4, 5));

/* 5.	Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw:
 *****
 *   *
 *   *
 *   *
 *****
 */

function DrawSquare(a, b) {
  var result = "";
  for (i = 0; i < a; i++) {
    for (j = 0; j < b; j++) {
      if (i === 0 || i === a - 1 || j === 0 || j === b - 1) {
        result += "*";
      } else {
        result += " ";
      }
    }
    if (i !== a - 1) result += "\n";
  }
  return result;
}
console.log(DrawSquare(5, 5));

/* 6.	Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
 * * * * *
 * * *
 * * * * * * *
 */

/*7.	Write a program that calculates a number of digits of a given number.  */

var a = 3344;
var result = "";
var digit = 0;

if (typeof a !== "number") {
  result = "Invalid input";
} else {
  digit += (result + a).length;
}
console.log(digit);

function NumberOfDigits(n) {
  var result = "";
  var digit = 0;
  if (typeof n !== "number") {
    return "Invalid input";
  } else {
    digit = (result + n).length;
  }
  return digit;
}
console.log(NumberOfDigits(0.0055));

function numberOfDigits(a) {
  if (typeof a !== "number") return "Invalid input";
  if ((a = a + "")) return a.length;
}
console.log(numberOfDigits(0.0006));

/* 8.Write a program that calculates a number of appearances of a given number in a
given array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3 */

a = [2, 4, 7, 8, 7, 7, 1];
e = 7;
var result = 0;

for (i = 0; i < a.length; i++) {
  if (a[i] === e) {
    result += 1;
  }
}
console.log(result);

function NumberOfAppearances(a, e) {
  var result = 0;
  for (i = 0; i < a.length; i++) {
    if (a[i] === e) {
      result += 1;
    }
  }
  return result;
}
console.log(NumberOfAppearances([2, 4, 7, 8, 7, 7, 1], 7));

function numberOfAppearances(arr, n) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === n) result += 1;
  }
  return result;
}
console.log(numberOfAppearances([2, 4, 7, 8, 7, 7, 1], 7));

/* 9.	Write a program that calculates the sum of odd elements of a given array.  */

var arr = [2, 6];
var result = 0;

for (i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    result += arr[i];
  }
}
console.log(result);

function SumOfArraysElements(arr) {
  var result = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result += arr[i];
    }
  }
  return result;
}
var arr = [2, 4, 5, 7, 3];
console.log(SumOfArraysElements(arr));

function sumOfArraysElements(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) result += 1;
  }
  return result;
}
console.log(sumOfArraysElements([2, 6, 3, 3, 7]));

/* 10.	Write a program that calculates the number of appearances of a letter a in a given string. Modify the program so it calculates the number of both letters a and A. */

var a = ["A", "p", "a", 5, "s"];
var number = 0;

for (i = 0; i < a.length; i++) {
  if (a[i] === "A" || a[i] === "a") {
    number += 1;
  }
}
console.log(number);

function AppearancesOfLetter(a) {
  var number = 0;
  for (i = 0; i < a.length; i++) {
    if (a[i] === "A" || a[i] === "a") {
      number += 1;
    }
  }
  return number;
}
var a = ["A", "p", "a", 34, "s"];
console.log(AppearancesOfLetter(a));

function numberOfAppearancesOfLetter(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "a" || arr[i] === "A") result += 1;
  }
  return result;
}
console.log(numberOfAppearancesOfLetter(["A", "p", "a", 34, "s"]));

/* 11.	Write a program that concatenates a given string given number of times. For example, if ???abc??? and 4 are given values, the program prints out abcabcabcabc. */

var a = "abc";
var e = 4;
var result = "";

for (i = 0; i < e; i++) {
  result += a;
}
console.log(result);

function ConcatenationOfStrings(a, e) {
  if (typeof a !== "string") {
    return "Invalid input";
  }
  var result = "";
  for (i = 0; i < e; i++) {
    result += a;
  }
  return result;
}
console.log(ConcatenationOfStrings("Nebojsa", 4));

function concatinatesAString(string, n) {
  if (typeof string !== "string") return "Invalid input!";
  var result = "";
  for (var i = 0; i < n; i++) {
    result += string;
  }
  return result;
}
console.log(concatinatesAString("Nebojsa", 4));
