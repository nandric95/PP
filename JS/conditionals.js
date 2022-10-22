// 1. Write a program that compares two numbers and display the larger. Result should be displayed in the console.

var a = 2;
var b = 3;

var result = "";

if (a > b) {
    console.log(a);
} else if (b === a) {
    result="a equal to b";
    } else if (b > a){
        console.log(b);
    }

// 2. Write a program to check if the number is divisible by 2. If it is, print even, if not, print odd.
//Sample numbers: 3, 4, 9 (check one at the time)
//Output: odd, even, odd

var a = 3;
var b = 4;
var c = 9;
result = "";

if (a % 2 === 0) {
    result="even";
} else { if (a % 2 !== 0)
    result="odd";
}
console.log(result);

if (b % 2 === 0) {
    result="even";
} else { if (b % 2 !== 0)
    result="odd";
}
console.log(result);

if (c % 2 === 0) {
    result="even";
} else { if (c % 2 !== 0)
    result="odd";
}
console.log(result);


//Write a program to check if the number is divisible by 3 and 5. If it is, print that number.

//Sample numbers: 15, 12 (check one at the time)
//Output: 15 


var d = 12;
var e = 15;
var result = "";

if (d % 5 === 0 && d % 3 === 0) {
    console.log(d);
} else {
    result1="number is not divisable by 3 and 5";
}
console.log(result1);

if (e % 5 === 0 && e % 3 === 0) {
    console.log(e);
} else {
    result="number is not divisable by 3 and 5";
}
console.log(result);

//Write a conditional statement to find the sign of product of three numbers. Display the result in the console with the specified sign.
//Sample numbers: 3, -7, 2 
//Output: The sign is - 

var f = 3;
var h = -7;
var g = 2;

var result2 ="";

if (f * h * g < 0) {
    result2=" - ";
} else {
    if (f * h * g > 0) {
        result2="positive value";
    }
}
console.log(result2);

//Write a program to check if the variable is a number. If it’s a number, check if it is divisible by 2. If it is, print the result, if not, show “X”
//Sample numbers: 10 | 7 (check one at the time)
//Output: 10 / 2 = 5 | X 

var r = 10;
var i = 7;

var result = "";

if (typeof r === "number") {
    if (r % 2 === 0) {
        result = "10 / 2 = 5";
    } else {
        result = "X";
    }
} else {
    result = "r is NOT a number";
}
console.log(result);

if (typeof i === "number") {
    if (i % 2 === 0) {
        result = "10 / 2 = 5";
    } else {
        result = "X";
    }
}
console.log(result);

//Write a conditional statement to find the largest of five numbers. Display the result in console.

//Sample numbers: -5, -2, -6, 0, -1 
//Output: 0 

var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;

var result = "";

if (d > a && d > b && d > c && d > e) {
    console.log(d);
} else {
    result = "d is not a largest nubmer";
}


//Write a conditional statement to sort three numbers.

//Sample numbers : 0, -1, 4 
//Output : 4, 0, -1 

var a = 0;
var b = -1;
var c = 4;

var result = "";

if (a > b && a > c) {
    result = "0, -1, 4";
} else if (b > c && b > a) {
    result = "-1, 0, 4";
} else if (c > b && c > a) {
    result= "4, 0, -1";
} else {
    result = "I give up";
}
console.log(result);

//Task 1. Write a conditional statement to find the sign of product of three numbers. Display the result in the console with the specified sign.
//Sample numbers: 3, -7, 2 
//Output: The sign is - 

var a = 3;
var b = -7;
var c = 2;
var result = "";

if (a * b * c < 0) {
    result= "-";
} else {
    result = "+";
}
console.log(result);

//Task 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
//Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ] 
//Sample Input: 60°C
//	Output : 60°C is 140 °F

var celsius = 0;
var farenheit = 140;

var result="";

if (farenheit = (9*celsius/5) + 32) {
    result= celsius + "°C" + " is " + farenheit + "°F";
} else if (celsius = ((farenheit-32)*5)/9) {
    result= farenheit + "°F" + " is " + celsius;
} else {
    result="value is not a temperature";
}
console.log(result);
    
//Task 7. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double difference between that number and 13.
//	Sample Input: 11					Sample Input: 32
//	Output : 2						Output : 38

var a = 11;
var b = 32;
var result = "";
if (a < 13) {
    console.log(13 - a);
} else {
    result = "I give up";
}
if (b > 13) {
    console.log((b - 13) * 2);
} else {
    result = "I give up";
}

//Task 8. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
//	Sample Input: 12,5					Sample Input: 8,8
//	Output : 17						Output : 48

var a = 12;
var b = 5;

var result = "";

if (a !== b) {
    console.log(a + b);
} else if (a === b) {
    console.log((a + b) * 3);
}
console.log(result);

var a = 8;
var b = 8;

var result = "";

if (a !== b) {
    console.log(a + b);
} else if (a === b) {
    console.log((a + b) * 3);
}
console.log(result);

/*Task 9. Write a JavaScript program to check two given numbers and print “true” if one of the number is 50 or if their sum is 50.
	Sample Input: 5,54			Sample Input: 6,50			Sample Input: 40,10
	Output : -				Output : true				Output : true
*/

var a = 5;
var b = 54;

var result = "";

if (a === 50 && b ===50 || a + b === 50)  {
    result="true";
} else {
    result="-";
}
console.log(result);

var a = 6;
var b = 50;

var result = "";

if (a === 50 || b ===50 || a + b === 50)  {
    result="true";
} else {
    result="-";
}
console.log(result);

var a = 40;
var b = 10;

var result = "";

if (a === 50 || b ===50 || a + b === 50)  {
    result="true";
} else {
    result="-";
}
console.log(result);


/*Task 10. Write a JavaScript program to check a given integer is within 20 of 100 or 400, and print range in which number belongs.
Sample Input: 13			Sample Input: 34			Sample Input: 256
	Output : -				Output : 20 ⇔ 100			Output : 100 ⇔ 400
*/

var a = 13;
var b = 32;
var c = 256;

var result="";

if (a <= 20) {
    result = "-";
} else if (20 < a < 100) {
    result = "20 < a < 100";
} else if (100 < a < 400) {
    result = "100 < a < 400";
} else if (a <= 400) {
    result = "a <= 400";
} else {
    result = "-";
}
console.log(result);

var a = 13;
var b = 32;
var c = 256;

if (b <= 20) {
    result = "-";
} else if (20 < b < 100) {
    result = "20 < b < 100";
} else if (100 < b < 400) {
    result = "100 < b < 400";
} else if (b <= 400) {
    result = "b <= 400";
} else {
    result = "-";
}
console.log(result);

var a = 13;
var b = 32;
var c = 256;

if (c <= 20) {
    result = "-";
} else if (100 < c < 400) {
    result = "100 < c < 400";
} else if (c <= 400) {
    result = "c <= 400";
} else {
    result = "-";
}
console.log(result);