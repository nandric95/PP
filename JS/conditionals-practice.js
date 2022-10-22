var a = 3;
var result = "";

if (a > 2) {
    result = a + " is greater than 2";
} else {
    result = a + " is lower than 2";
}
console.log(result);

var result = '';
var a = 0;
var b = 1;

if (a > 2 || a < -2) {
    result = a + "a is NOT between -2 and 2";
} else if (a === 0 && b === 0) {
    result = "both a and b are zeros";
} else if (a === b) {
    result = "a and b are equal";
} else {
    result = "I give up";
}
console.log(result);

var result = '';
var a = 0;
var b = 1;

if (a === 1) {
    if (b === 2) {
    result = "a is 1 and b is 2";
    } else {
        result = "a is 1 but b is not 2";
    }   
    } else {
        result = "a is 1 but no idea about b";
}
console.log(result);

var result = '';
var a = 12;

(typeof a !== "number")? console.log("a is not a number") : console.log("a is a number");
console.log(result);

var a = "";
console.log(!!a);