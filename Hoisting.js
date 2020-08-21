//undefined vs reference error

console.log(typeof variable); // Output: undefined
console.log(variable); // Output: ReferenceError: variable is not defined

//hoisting variables

function hoist() {
    a = 20;
    var b = 100;
  }
  
  hoist();
  console.log(a); //Output: 20
  console.log(b); //Output: ReferenceError: b is not defined
 
  //global variables
  //var keryword
 console.log(hoist); // Output: undefined
 var hoist = 'The variable has been hoisted.';


 var hoist;
 console.log(hoist); // Output: undefined
 hoist = 'The variable has been hoisted.';

//function scoped variables
 function hoist() {
    console.log(message);
    var message='Hoisting is all the rage!'
  }
  
  hoist();//output: undefined

  
  function hoist() {
    var message;
    console.log(message);
    message='Hoisting is all the rage!'
  }
  
  hoist(); // Ouput: undefined

  
  function hoist() {
    var message='Hoisting is all the rage!'
    return (message);
  }
  
  hoist(); // Ouput: Hoisting is all the rage!

//strict mode
'use strict';
 console.log(hoist); // Output: ReferenceError: hoist is not defined
 hoist = 'Hoisted'; 

 //block scoped
 // let keyword
 console.log(hoist); // Output: ReferenceError: hoist is not defined ...
let hoist = 'The variable has been hoisted.';


let hoist;
console.log(hoist); // Output: undefined
hoist = 'Hoisted'

//immutable mode
// const keyword
const PI = 3.142;
PI = 22/7; // Let's reassign the value of PI
console.log(PI); // Output: TypeError: Assignment to constant variable.


console.log(hoist); // Output: ReferenceError: hoist is not defined
const hoist = 'The variable has been hoisted.';


function getCircumference(radius) {
    console.log(circumference)
    circumference = PI*radius*2;
    const PI = 22/7;
  }
  getCircumference(2) // ReferenceError: circumference is not defined


const PI;
console.log(PI); // Ouput: SyntaxError: Missing initializer in const declaration
PI=3.142;


//hoisting functions
//function declarations

hoisted(); // Output: "This function has been hoisted."
function hoisted() {
  console.log('This function has been hoisted.');
};


//function expressions
expression(); //Output: "TypeError: expression is not a function
var expression = function() {
  console.log('Will this work?');
};



expression(); // Ouput: TypeError: expression is not a function
var expression = function hoisting() {
  console.log('Will this work?');
};


//order of precedence
//Variable assignment takes precedence over function declaration
var double = 22;
function double(num) {
  return (num*2);
}
console.log(typeof double); // Output: number


//Function declarations over variable declarations
var double;
function double(num) {
  return (num*2);
}
console.log(typeof double); // Output: function


//hoisting classes
//Class declarations
var Frodo = new Hobbit();
Frodo.height = 100;
Frodo.weight = 300;
console.log(Frodo); // Output: ReferenceError: Hobbit is not defined
class Hobbit {
  constructor(height, weight) {
    this.height = height;
    this.weight = weight;
  }
}


class Hobbit {
    constructor(height, weight) {
      this.height = height;
      this.weight = weight;
    }
  }
  
  var Frodo = new Hobbit();
  Frodo.height = 100;
  Frodo.weight = 300;
  console.log(Frodo); // Output: { height: 100, weight: 300 }


  //class expressions
  var Square = new Polygon();
Square.height = 10;
Square.width = 10;
console.log(Square); // Output: TypeError: Polygon is not a constructor

var Polygon = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};


var Polygon = class Polygon {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  
  var Square = new Polygon();
  Square.height = 10;
  Square.width = 10;
  console.log(Square);




