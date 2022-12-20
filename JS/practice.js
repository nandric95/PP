/* 1.	Write a program that calculates the maximum of two given numbers. */
var a = 33;
var b = 44;
var result = "";

if (a > b) {
  result = a;
} else if (b > a) {
  result = b;
}

function maximumOfNumber(a, b) {
  if (typeof a !== "number" && typeof b !== "number") {
    return "Invalid Input";
  }
  result = "";
  if (a > b) {
    result = a;
  } else if (b > a) {
    result = b;
  }
  return result;
}

console.log(maximumOfNumber(33, 55));

/*2.	Write a program that checks if a given number is odd. */

function oddNumber(a) {
  if (typeof a !== "number") {
    return "Invalid input";
  }
  var result = "";
  if (a % 2 !== 0) {
    result = "odd";
  }
  return result;
}
console.log(oddNumber(4));

/* 3.	Write a program that checks if a given number is a three digit long number.*/

function threeDigit(a) {
  if (typeof a !== "number") {
    return "Invalid input";
  }
  var result = "";
  if (a > 100 && a < 1000) {
    result = "three digit number";
  }
  return result;
}
console.log(threeDigit(555));

/*4.	Write a program that calculates an arithmetic mean of four numbers. */

function arithmeticMean(a, b, c, d) {
  if (
    typeof a !== "number" &&
    typeof b !== "number" &&
    typeof c !== "number" &&
    typeof d !== "number"
  ) {
    return "Invalid input";
  }
  var result = "";
  if ((e = a + b + c + d)) {
    result = e / 4;
  }
  return result;
}
console.log(arithmeticMean(5, 5, 6, 7));

/*7.	Write a program that calculates a number of digits of a given number.  */

function numberOfdigits(a) {
  if (typeof a !== "number") {
    return "Invalid input";
  }
  var result = "";
  if ((c = a + "")) {
    result = c.length;
  }
  return result;
}
console.log(numberOfdigits(0.005));

/* 8.Write a program that calculates a number of appearances of a given number in a
given array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3 */

function numberOfAppearances(a, e) {
  var result = 0;
  for (i = 0; i < a.length; i++) {
    if (e === a[i]) {
      result += 1;
    }
  }
  return result;
}
console.log(numberOfAppearances([2, 4, 7, 8, 7, 7, 1], 7));

/* 9.	Write a program that calculates the sum of odd elements of a given array.  */

function sumOfOdds(a) {
  result = 0;
  for (i = 0; i < a.length; i++) {
    if (a[i] % 2 !== 0) {
      result += a[i];
    }
  }
  return result;
}
console.log(sumOfOdds([3, 2, 5, 2, 7]));

/* 10.	Write a program that calculates the number of appearances of a letter a in a given string. Modify the program so it calculates the number of both letters a and A. */

function numberOfLetter(b) {
  result = 0;
  for (i = 0; i < b.length; i++) {
    if (b[i] === "a" || b[i] === "A") {
      result += 1;
    }
  }
  return result;
}
console.log(numberOfLetter("Abanana"));

/* 11.	Write a program that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the program prints out abcabcabcabc. */

var a = "abc";

function concatenates(a, e) {
  var result = "";
  for (i = 0; i < e; i++) {
    result += a;
  }
  return result;
}
console.log(concatenates("abc", 4));

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

/* 1.	Write a function to check whether the `input` is a string or not.

"My random string" -> true
12 -> false */

function string(a) {
  var result = "";
  if (typeof a === "string") {
    result = "true";
  }
  return "false";
}
console.log(string("abc"));

print("This might work or not?");

var print = (function () {
  return console.log;
})();

function multiply(a, b) {
  var mResult = a * b;
  return function (a, b) {
    return mResult + a + b;
  };
}

var output = multiply(3, 4)(5, 5);
console.log(output);

var input = [1, undefined, 2, NaN, 3, 4, 5, "six"];

var output = transformArray(input, function (param) {
  return param + "";
});

console.log(output);

function transformArray(array, action) {
  var result = [];
  for (var index = 0; index < array.length; index++) {
    var element = array[index];
    result[index] = action(element);
  }
  return result;
}

var PI = 3.1;

function circleSurface(radius) {
  var result = radius * radius * PI;
  var PI = 3.14159;

  return result;
}

var output = circleSurface(5);
console.log(output);

function circleCalc(radius, calculation) {
  var result = calculation(radius);
  return result;
}

var output = circleCalc(7, function (r) {
  var PI = 3.14159;
  return 2 * r * PI;
});

console.log(output);

var input = ["one", "1e3", "10e-3", "32", "a15", "12,1"];

function transformArray(array, action) {
  var result = [];
  for (var index = 0; index < array.length; index++) {
    var element = array[index];
    result[index] = action(element);
  }
  return result;
}

var output = transformArray(input, parseFloat);
console.log(output);

output = transformArray(input, parseInt);
console.log(output);

function cubeCalculation(a, calc) {
  return calc(a);
}

var output = cubeCalculation(10, function (a) {
  6 * a * a;
});
console.log(output);
