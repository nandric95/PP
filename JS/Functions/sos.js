/*1.	Write a function that checks if a given string contains digit 5.
Input: “1b895abd” 
Output: true

Input: “1bser9re”
Output: false
*/

function checkIfItIsString(a) {
  for (i = 0; i < a.length; i++) {
    var element = a[i];
    if (element === "5") {
      return "true";
    }
  }
  return "false";
}

var arr = "1b895abd";
var arr1 = "1bser9re";
var r = checkIfItIsString(arr);
console.log(r);
var d = checkIfItIsString(arr1);
console.log(d);

/*2.	Write a function that in a given string replaces all the appearances of the string ‘JS’ with ‘**’. 
Input: “Programming in JS is super interesting!”
Output: “Programming in ** is super interesting!”
 */

function replaceString(a) {
  var result = "";
  for (i = 0; i < a.length; i++) {
    if (a[i] === "J" || a[i] === "S") {
      result += "*";
    } else {
      result += a[i];
    }
  }
  return result;
}

var arr = "Programming in JS is super interesting!";
var r = replaceString(arr);
console.log(replaceString(r));

/*3.	Write a function that inserts a given character on a given position in the string.
Input: “Goo morning”, 4, ‘d’ 
Output: “Good morning” 
 */

function insertCharInString(string, pos, char) {
  var result = "";
  for (var i = 0; i < string.length; i++) {
    if (i === pos - 1) result += char + " ";
    else result += string[i];
  }
  return result;
}
console.log(insertCharInString("Goo morning", 4, "d"));

/*4.	Write a function that deletes a character from the given position in the string. 
Input: “Goodd morning!”, 3 
Output: “Good morning!” 
 */

function deleteCharacter(string, pos, char) {
  var result = "";
  for (var i = 0; i < string.length; i++) {
    if (i !== pos) result += string[i];
  }
  return result;
}
console.log(deleteCharacter("Goodd morning!", 3));

/*5.	Write a function that deletes every second element of the given array.
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
Output: [3, 1, 90, 23, 67]
 */

function deleteEverySecondElement(a) {
  var result = [];
  for (var i = 0; i < a.length; i++) {
    if (i % 2 === 0) result[result.length] = a[i];
  }
  return result;
}
console.log(deleteEverySecondElement([3, 5, 1, 8, 90, -4, 23, 1, 67]));

/* 6.	Write a function that replaces the elements of the given array between two positions with their doubled values. 
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6 
Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]
*/

function replacesTheElements(a, b, c) {
  var result = [];
  for (var i = 0; i < a.length; i++) {
    if (i >= b && i <= c) result[result.length] = a[i] * 2;
    else result[result.length] = a[i];
  }
  return result;
}
console.log(replacesTheElements([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6));

/*7.	Write a function that checks if every element of the first array is contained in the second array. Be careful with repetitions! 
Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
Output: true
 */

function checkTheElements(a, b) {
  var result = "";
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        result = "true";
      } else result = "false";
    }
  }
  return result;
}
console.log(checkTheElements([3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]));

/*8.	Write a function that sorts an array of strings by the number of appearances of the letter ‘a’ or ‘A’. 
Input: [‘apple’, ‘tea’,  ‘amazing’, ‘morning’, ‘JavaScript’]
Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’]
 */

function sortsArrays(a) {
  var result = [];
  var result1 = 0;
  var b;
  for (var i = 0; i < a.length; i++) {
    if (a[i].length === "a" || a[i].length === "A") {
      result1 += 1;
    }
  }
  return result1;
}

var r = sortsArrays(["apple", "tea", "amazing", "morning", "JavaScript"]);
console.log(r);
