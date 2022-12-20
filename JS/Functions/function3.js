/*1.	Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

"My random string", "JS " -> "JS My random string"
"My random string", "JS ", 10 -> "My random JS string"*/

function insertStringOnPosition(string, a, b) {
  var result = "";
  for (var i = 0; i < string.length; i++) {
    if (i === a - 1) result += b;
    result += string[i];
  }
  return result;
}
console.log(insertStringOnPosition("My random string", 1, " JS "));

function insertInString(string, position, x) {
  var newString = "";
  for (var i = 0; i < string.length; i++) {
    if (i === position - 1) {
      newString += x;
    } else {
      newString += string[i];
    }
  }
  return newString;
}
console.log(insertInString("My random string", 1, " JS "));

function insertString(string, position, n) {
  var result = "";
  if (!position) {
    position = 1;
  }
  for (var i = 0; i < string.length; i++) {
    if (i === position - 1) result += n;
    result += string[i];
  }
  return result;
}

console.log(insertString("My random string", 1, " JS "));

/*2.	Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

[NaN, 0, 15, false, -22, '', undefined, 47, null]*/

function arryIntoString(arr) {
  var string = "";
  for (var i = 0; i < arr.length; i++) {
    if (isFinite(arr[i]) && arr[i] !== undefined && arr[i] !== null)
      string += arr[i] + " ";
  }
  return string;
}
console.log(arryIntoString([NaN, 0, 15, false, -22, "", undefined, 47, null]));

function filter(arr) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (isFinite(arr[i]) && arr[i] !== null && arr[i] !== undefined)
      newArray[newArray.length] = arr[i];
  }
  return newArray;
}
console.log(filter([NaN, 0, 15, false, -22, "", undefined, 47, null]));

/*3.	Write a program to filter out falsy values from the array.

[NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]*/

function filterFalsyValues(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (!!array[i] === true) newArray[newArray.length] = array[i];
  }
  return newArray;
}
console.log(
  filterFalsyValues([NaN, 0, 15, false, -22, "", undefined, 47, null])
);

function filter(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (!!arr[i] === true) newArr[newArr.length] = arr[i];
  }
  return newArr;
}

console.log(filter([NaN, 0, 15, false, -22, "", undefined, 47, null]));

/*4.	Write a function that reverses a number. The result must be a number.

12345 -> 54321 // Output must be a number*/

function returnNumber(a) {
  a += "";
  var result = "";
  for (var i = a.length - 1; i >= 0; i--) {
    result += a[i];
  }
  return result;
}
console.log(returnNumber(12345));

function reverse(n) {
  var result = "";
  n = n + "";
  for (var i = n.length - 1; i >= 0; i--) {
    result += n[i];
  }
  return result;
}

console.log(reverse(12345));

/*5.	Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2] */

function returnLastElement(arr) {
  var result = [];
  for (i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) return (result = arr[i]);
  }
  return result;
}
console.log(returnLastElement([7, 9, 0, -2]));

function getLastEl(array, n) {
  if (!n) n = 1;
  var result = [];
  for (var i = 0; i < n; i++) {
    result[i] = array[array.length - n + i];
  }
  return result;
}
console.log(getLastEl([7, 9, 0, -2], 2));

function lastElement(arr) {
  var result = "";
  for (var i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) result = arr[i];
  }
  return result;
}

console.log(lastElement([7, 9, 0, -2]));

function findTwoLastElement(arr, n) {
  if (!n) n = 1;
  var newarr = [];
  for (var i = 0; i < n; i++) {
    newarr[i] = arr[arr.length - n + i];
  }
  return newarr;
}

console.log(findTwoLastElement([7, 9, 0, -2], 2));

/*6.	Write a function to create a specified number of elements with pre-filled numeric value array.

6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null] */

function returnArray(n, element) {
  if (typeof element === "undefined") element = null;
  var arr = [];
  for (var i = 0; i < n; i++) {
    arr[i] = element;
  }
  return arr;
}

console.log(returnArray(6, "none"));

function createElements(n, element) {
  var arr = [];
  for (var i = 0; i < n; i++) {
    arr[arr.length] = element;
  }
  return arr;
}

console.log(createElements(10, "none"));

/*7.	Write a function that says whether a number is perfect.

28 -> 28 is a perfect number.

Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).

E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.*/

function perfectNumber(n) {
  var result = "";
  var sum = 0;
  for (var i = 0; i <= n; i++) {
    if (n % i === 0) sum += i;
  }
  if (sum / 2 === n) return n + " is a perfect number";
  else return n + " is NOT a perfect number";
}
console.log(perfectNumber(496));

function perfectNumber(n) {
  var result = "";
  var sum = 0;
  for (var i = 0; i <= n; i++) {
    if (n % i === 0) {
      sum += i;
      if (sum / 2 === n) {
        result = n + " is a perfect number!";
      } else {
        result = n + " is NOT a perfect number";
      }
    }
  }
  return result;
}

console.log(perfectNumber(496));

/*8.	Write a function to find a word within a string.

'The quick brown fox', 'fox' -> "'fox' was found 1 times"
'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"*/

function findAWord(string, word) {
  var result = 0;
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === word[0]) {
      for (var j = i; j < word.length + i; j++) {
        if (string[j] === word[j - i]) count++;
        if (count === word.length) result++;
      }
      count = 0;
    }
  }
  return word + " was found " + result + " times";
}
console.log(findAWord("The quick brown fox", "fox"));
console.log(findAWord("aa, bb, cc, dd, aa", "aa"));

function findAWord(string, word) {
  var result = 0;
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === word[0]) {
      for (var j = i; j < word.length + i; j++) {
        if (string[j] === word[j - i]) count++;
        if (count === word.length) result++;
      }
      count = 0;
    }
  }
  return word + " was found " + result + " times";
}

console.log(findAWord("The quick brown fox", "fox"));

/*9.	Write a function to hide email address.

"myemailaddress@bgit.rs" -> "mye...@bgit.rs"*/

function hideAddress(address) {
  var index;
  var result = "";
  for (var i = 0; i < address.length; i++) {
    if (address[i] === "@") index = i;
  }
  for (i = 0; i < address.length; i++) {
    if (i > 2 && i < index) result += ".";
    else result += address[i];
  }
  return result;
}
console.log(hideAddress("myemailaddress@bgit.rs"));

function hideAddress(string) {
  var index;
  var result = "";
  for (var i = 0; i < string.length; i++) {
    if (string[i] === "@") index = i;
  }
  for (var i = 0; i < string.length; i++) {
    if (i > 2 && i < index) result += ".";
    else result += string[i];
  }
  return result;
}

console.log(hideAddress("myemailaddress@bgit.rs"));

/*10.	Write a program to find the most frequent item of an array.

[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]*/

function findTheMostFrequent(a) {
  var count = 0;
  var max = 0;
  var index;
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a.length; j++) {
      if (a[i] === a[j]) count++;
    }
    if (count > max) {
      max = count;
      index = i;
    }
    count = 0;
  }
  return a[index];
}
console.log(
  findTheMostFrequent([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3])
);
