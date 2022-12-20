/* 1.	Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no
 */

function checkElement(arr, letter) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === letter) {
      return "Yes";
      break;
    }
  }
  return "No";
}
var reuslt = checkElement([5, -4.2, 3, 7], 9);
console.log(reuslt);

function check(arr, n) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === n) return "yes";
  }
  return "no";
}

console.log(check([5, -4.2, 3, 7], 7));

/*2.	Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]*/

function multiplePositiveNumber(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      array[i] = 2 * array[i];
    }
  }
  return array;
}
console.log(multiplePositiveNumber([-3, 11, 5, 3.4, -8]));

function multi(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) arr[i] = arr[i] * 2;
  }
  return arr;
}

console.log(multi([-3, 11, 5, 3.4, -8]));

/*3.	Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3*/

function minimumOfArray(arr) {
  var min = arr[0];
  var index = 0;
  for (var i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
      index = i;
    }
  }
  return [min, index];
}
console.log(minimumOfArray([4, 2, 2, -1, 6]));

function min(arr) {
  var min = arr[0];
  var index;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      index = i;
    }
  }
  return [min, index];
}

console.log(min([4, 2, 2, -1, 6]));

/*4.	Write a program that finds the second smallest number and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2*/

function secondSmallestNumber(arr1) {
  var firstMin = arr1[0];
  var secondMin = arr1[0];
  for (var i = 1; i < arr1.length; i++) {
    if (arr1[i] < firstMin) {
      secondMin = firstMin;
      firstMin = arr1[i];
    }
  }
  console.log(firstMin, secondMin);
}
var r = secondSmallestNumber([4, 2, 3, -1, 6]);

function secoundMin(arr) {
  var min = arr[0];
  var min2 = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min2 = min;
      min = arr[i];
    }
  }
  return min2;
}

console.log(secoundMin([4, 2, 3, -1, 6]));

/*5.	Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16*/

function sumOfPositiveElements(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) result += arr[i];
  }
  return result;
}
console.log(sumOfPositiveElements([3, 11, -5, -3, 2]));

function sum(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result += arr[i];
    }
  }
  return result;
}

console.log(sum([3, 11, -5, -3, 2]));

/*6.	Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.

Input array: [3, 4, 12, 8]
	Output: The array isn’t symmetric.*/

function ifArrayIsSymetric(arr) {
  var result = "";
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[arr.length - 1 - i]) return "The array is symetric.";
    else return "The array is NOT symetric.";
  }
}
console.log(ifArrayIsSymetric([2, 4, -2, 7, -2, 4, 2]));

function symetric(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[arr.length - 1 + i]) return "yes";
    else return "no";
  }
}

console.log(symetric([2, 4, -2, 7, -2, 4, 2]));

/*7.	Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]*/

function intertwineArrays(a, b) {
  var c = [];
  for (var i = 0; i < a.length; i++) {
    c[c.length] = a[i];
    c[c.length] = b[i];
  }
  return c;
}
console.log(intertwineArrays([4, 5, 6, 2], [3, 8, 11, 9]));

function intertwin(a, b) {
  var c = [];
  for (var i = 0; i < a.length; i++) {
    c[c.length] = a[i];
    c[c.length] = b[i];
  }
  return c;
}

console.log(intertwin([4, 5, 6, 2], [3, 8, 11, 9]));

/*8.	Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]*/

function concatenateArrays(a, b) {
  var c = [];
  for (var i = 0; i < a.length; i++) {
    c[c.length] = a[i];
  }
  for (var i = 0; i < b.length; i++) {
    c[c.length] = b[i];
  }
  return c;
}
console.log(concatenateArrays([4, 5, 6, 2], [3, 8, 11, 9]));

function concatenate(a, b) {
  var c = [];
  for (var i = 0; i < a.length; i++) {
    c[c.length] = a[i];
  }
  for (var i = 0; i < b.length; i++) {
    c[c.length] = b[i];
  }
  return c;
}

console.log(concatenate([4, 5, 6, 2], [3, 8, 11, 9]));

/*9.	Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]*/

function deletesNumber(arr, n) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== n) newArray[newArray.length] = arr[i];
  }
  return newArray;
}
console.log(deletesNumber([4, 6, 2, 8, 2, 2], 2));

function deleteElement(arr, element) {
  var newarr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== element) newarr[newarr.length] = arr[i];
  }
  return newarr;
}

console.log(deleteElement([4, 6, 2, 8, 2, 2], 2));

/*10.	Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]*/

function insertElement(e, p, a) {
  var b = [];
  if (p > a.length) return "Error";
  for (var i = 0; i < a.length; i++) {
    if (i === p) b[b.length] = e;
    b[b.length] = a[i];
  }
  return b;
}
console.log(insertElement(78, 3, [2, -2, 33, 12, 5, 8]));

function addElement(arr, e, p) {
  var newarr = [];
  if (p > arr.length) return "Error";
  for (var i = 0; i < arr.length; i++) {
    if (i === p) newarr[newarr.length] = e;
    newarr[newarr.length] = arr[i];
  }
  return newarr;
}

console.log(addElement([2, -2, 33, 12, 5, 8], 78, 3));
