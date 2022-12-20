/* 1.	Write a function to check whether the `input` is a string or not.

"My random string" -> true
12 -> false */

var a = "My random string";
var result = "";
if (typeof a === "string") {
  result = "true";
} else {
  result = "false";
}

function IfInputIsString(n) {
  if (typeof n === "string") {
    result = "true";
  } else if (typeof n !== "string") {
    result = "false";
  }
  return result;
}

console.log(IfInputIsString("Nebojsa"));

function ifString(string) {
  if (typeof string === "string") return "String";
  else return "NOT a string";
}
console.log(ifString(56));

/* 2.	Write a function to check whether a string is blank or not.

"My random string" -> false
" " -> true
12 -> false
false -> false
 */

var a = "My random string";

var result = "";

function IfInputIsBlankString(n) {
  if (n === "") {
    return true;
  } else {
    return false;
  }
}
console.log(IfInputIsBlankString("Nebojsa"));

function ifABlankString(string) {
  if (typeof string !== "string" || !!string === false) return false;
  if (string === " ") return true;
  else return false;
}
console.log(ifABlankString(" "));

/* 3.	Write a function that concatenates a given string n times (default is 1).
	"Ha" -> "Ha"
"Ha", 3 -> "HaHaHa"
 */

var a = "Ha";
var result = "";

for (i = 0; i < a; i++) {
  result += a;
}

console.log(result);

function ConcatenatesAGivenNumber(a, b) {
  var result = "";
  for (i = 0; i < b; i++) {
    result += a;
  }
  return result;
}

console.log(ConcatenatesAGivenNumber("Ha", 3));

function concatenatesOfString(string, n) {
  if (!n) n = 1;
  var result = "";
  for (var i = 0; i < n; i++) {
    result += string;
  }
  return result;
}
console.log(concatenatesOfString("Ha", 5));

/* 4.	Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2
 */

var a = "My random string";
var b = "n";
var result = 0;

for (i = 0; i < a.length; i++) {
  if (a[i] === "n") {
    result += 1;
  }
}
console.log(result);

function NumberOfLetter(a, b) {
  var result = 0;
  for (i = 0; i < a.length; i++) {
    if (a[i] === b) {
      result += 1;
    }
  }
  return result;
}
console.log(NumberOfLetter("My random string", "n"));

function numberOfAppearance(string, n) {
  var result = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === n) result += 1;
  }
  return result;
}
console.log(numberOfAppearance("My random string", "n"));

/* 5.	Write a function to find the position of the first occurrence of a character in a string. The result should be the position of character. If there are no occurrences of the character, the function should return -1. */

function firstOccurence(a, b) {
  for (var i = 0; i < a.length; i++) {
    if (a[i] === b) {
      return a.indexOf(b);
    } else if (a[i] === 0) return -1;
  }
}

console.log(firstOccurence("banana", "n"));

function firstOccurenceOfNumber(string, n) {
  if (!n) return "-1";
  var result = "";
  for (var i = 0; i < string.length; i++) {
    if (string[i] === n) return string.indexOf(n);
  }
}
console.log(firstOccurenceOfNumber("banana", "n"));

function findFirstOccurence(string, n) {
  if (!n) return "-1";
  for (var i = 0; i < string.length; i++) {
    if (string[i] === n) return string.indexOf(n);
  }
}

console.log(findFirstOccurence("banana", "n"));

/* 6.	Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1. */

function lastOccurence(string, char) {
  for (var i = 0; i < string.length; i++) {
    if (string[string.length - i] === char) {
      return string.length - i + 1;
    }
  }
  if (string[i] !== char) {
    return -1;
  }
}

var e = lastOccurence("betmenssss", "s");
console.log(e);

function findLastOccuernce(string, n) {
  if (!n) return "-1";
  for (var i = 0; i < string.length; i++) {
    if (string[string.length - i] === n) return string.length - i + 1;
  }
}

console.log(findLastOccuernce("betmenssss", "s"));

/* 7.	Write a function to convert string into an array. Space in a string should be represented as “null” in new array.

"My random string" -> ["M", "y", null, "r", "a"]
"Random" -> ["R", "a", "n", "d", "o", "m"]
 */

function convertToArray(string) {
  var arr = [];

  for (var i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      arr[arr.length] = string[i];
    } else {
      arr[arr.length] = null;
    }
  }
  return arr;
}

var r = convertToArray("My random string");
console.log(r);

function makeANewArray(string) {
  var newArray = [];
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      newArray[newArray.length] = string[i];
    } else {
      newArray[newArray.length] = null;
    }
  }
  return newArray;
}

console.log(makeANewArray("My random string"));

/* 8.	Write a function that accepts a number as a parameter and checks if the number is prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself. */

function numberAsAParameter(n) {
  if (typeof n !== "number") {
    return "Invalid input";
  }
  var result = "";
  if (n > 1 && n % 1 === 0 && n / n === 1 && n % 2 !== 0) {
    result = "Prime number";
  } else if (n < 1 && n / n !== 1 && n % 2 !== 0) {
    result = "NOT a prime number";
  }
  return result;
}
console.log(numberAsAParameter(106));

/*9.	 Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.

    "My random string", "_" -> "My_random_string"
    "My random string", "+" -> "My+random+string"
    "My random string" -> "My-random-string"
 */

function stringWithSeparator(string, separator) {
  var result = "";
  for (i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      result += separator;
    } else result += string[i];
  }
  return result;
}
console.log(stringWithSeparator("My random string", "-"));

function newString(string, separator) {
  var newString = "";
  for (var i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      newString += separator;
    } else newString += string[i];
  }
  return newString;
}

console.log(newString("My random string", "-"));

/* 10.	 Write a function to get the first n characters and add “...” at the end of newly created string. */

function charac(word, slice) {
  var news = word.slice(0, slice);
  console.log(news + "...");
}

charac("google", 3);

function threeDots(string, n) {
  var newString = "";
  for (var i = 0; i < n; i++) {
    newString += string[i];
  }
  if (i === n) {
    newString += "...";
  }
  return newString;
}

console.log(threeDots("google", 4));

/* 11.   Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]
 */

function arrayStringToNumber(a) {
  var b = [];
  for (var i = 0; i < a.length; i++) {
    if (isFinite(a[i])) b[b.length] = parseFloat(a[i]);
  }
  return b;
}
console.log(
  arrayStringToNumber(["1", "21", undefined, "42", "1e+3", Infinity])
);

function filter(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (isFinite(arr[i])) {
      newArr[newArr.length] = parseFloat(arr[i]);
    }
  }
  return newArr;
}

console.log(filter(["1", "21", undefined, "42", "1e+3", Infinity]));

/* 12.	 Write a function to calculate how many years there are left until retirement based on the year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed. */

function calculationForRetairment(sex, n) {
  var result = "You are retaired";
  var years = "";
  if (sex === "Men" || sex === "men") {
    years = 65 - n;
    if (years > 0) {
      result = "You still have " + years + "years until retirement";
    }
    if (sex === "Women" || sex === "women") {
      years = 60 - n;
      if (years > 0) {
        result = "You still have " + years + "years until retirement";
      }
    }
  }
  return result;
}
console.log(calculationForRetairment("men", 66));

function retairmentCalculator(sex, year) {
  var result = "You are retaired!";
  var years = "";
  if (sex === "men") {
    years = 65 - year;
    if (years > 0) {
      result = "You still have " + years + " years until retirement!";
    }
  }
  if (sex === "women") {
    years = 60 - year;
    if (years > 0) {
      result = "You still have " + years + " years until retirement!";
    }
  }
  return result;
}

console.log(retairmentCalculator("men", 55));

/* 13.	Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -> 1st
11 -> 11th
 */

function humanize(n) {
  if (n % 100 >= 11 && n % 100 <= 13) return n + "th";

  switch (n % 10) {
    case 1:
      return n + "st";
    case 2:
      return n + "nd";
    case 3:
      return n + "rd";
  }
  return n + "th";
}

var d = humanize(33);
console.log(d);
