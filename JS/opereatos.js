
//12.


var a = 30;
var b = 19;
var c = "44"
console.log(a === b);
console.log(a >= b);
console.log(a !== b);
console.log(!a > b);
console.log(a > c);


//13.

var p = true;
var q = true;
console.log(p && q);

var p = true;
var q = true;
console.log(p || q);

var p = true;
var q = false;
console.log(p && q);

var p = true;
var q = false;
console.log(p || q);

var p = false;
var q = true;
console.log(p && q);

var p = false;
var q = true;
console.log(p || q);

var p = false;
var q = false;
console.log(p && q);

var p = false;
var q = false;
console.log(p || q);

//14.

var UserAge = 27;

var negativeValue = 0;
var greaterThan = 120;

console.log(UserAge>negativeValue);
console.log((UserAge<0) && false);
console.log(UserAge > greaterThan || false);

//15.

var a = 60;
var b = 120;

console.log(a >= 60 && b <= 120);

