//Create a function to calculate the factorial of a number using closure

function factorial(num) {
  if (num < 0) return -1;
  if (num == 0) return 1;
  var fact = 1;
  var no = num;
  function childFactorial(fact, no) {
    fact = fact * no;
    no--;

    if (no === 0) {
      return fact;
    } else return childFactorial(fact, no);
  }
  return childFactorial(fact, no);
}

//console.log(factorial(5));

//Write a JavaScript program to test if the first character of a string is uppercase or not, if not then set the first character to uppercase
function uCase(str) {
  let code = str.charCodeAt(0);
  if (!(code > 64 && code < 90)) {
    let result = str.replace(str.charAt(0), str.charAt(0).toUpperCase());
    return result;
  } else {
    return str;
  }
}
//console.log(uCase("abc"));

//Deep clone Javascript Object (without using any internal methods of cloning). All properties along with functions, prototypes should get cloned to target object
function deepCopy() {
  let obj = {
    Name: "Shiwang",
    lastName: "Naidu",
  };
  let obj2 = {};
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const element = obj[key];
      obj2[key] = element;
    }
  }
  console.log(obj);
  console.log(obj2);
  console.log(obj === obj2);
}
//deepCopy();

/*
Create a constructor function Calculator that creates objects with 3 methods:
read() asks for two values using prompt and remembers them in object properties.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties.
*/

function Calculator() {
  this.val1, this.val2;
  this.read = function (v1, v2) {
    this.val1 = v1;
    this.val2 = v2;
    console.log(this.val1, this.val2);
  };
  this.mul = function () {
    console.log(this.val1 * this.val2);
  };
  this.sum = function () {
    console.log(this.val1 + this.val2);
  };
}
let operation = new Calculator();
operation.read(7, 7);
operation.mul();
operation.sum();
