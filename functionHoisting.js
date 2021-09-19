/**
 * Function Declaration vs Function Expression
There are two ways to define a function with the function keyword in JavaScript — function declaration and function expression.
A function declaration starts with the function keyword, followed by the name of the function (sayHello), then a block of code to be executed when the function is called ({ console.log('Hello!') }).

// function sayHi() {
//   console.log("Hi");
// }

//sayHi(); // Calling the function


function expression allows you to define a function without a name and as part of non-functional code blocks. A typical usage of a function expression is to assign a function to a variable. Below, I’m defining an anonymous function, that is, function without a name, (function () { console.log(Hello!) }) and assigning it to a variable (var sayHello =), so I can refer to the function via sayHello later on.


var sayHi = function() {
  console.log("Hi");
}

sayHi(); // Calling the function


 */

//sayHi();
//sayHi(6); // Even this Works, why??

// sayHi();
// var sayHi = function () {
//   console.log("Hi");
// };

//sayHi(); // Calling the function

//sayHi();

// ----------------------------

// sayHi();
// function sayHi() {
//   console.log("Hi");
// }

/**
 * Take 1: Normal functions and calling before the function declaration
    Step 1: In MCP JS engine fill scan the whole file and it will copy and entire function-with-its-body into memory area, hence hoisted.
    Step 2: In the execution phase it will encouter the 'sayHi();' statement and will execute the function.

    The above code is same as below 

    
function sayHi() {
  console.log("Hi");

  sayHi();
}
 */

// sayHi();
// var sayHi = function () {
//   console.log("Hi");
// };

/**
 * Take 2: function expression and calling before the function declaration
    Step 1: In MCP the JS engine will find that it's a function expression and it will not hoist this fucntion.
            Because function expression are not hoisted.
            But it will also encouter with 'var sayHi' and as we already know that engine puts 'undefined' as a value for variable declaration.

    Step 2: In execution phase when engine tries to execute sayHi() it will not be found and it will throw an exception
    TypeError: sayHi is not a function.

    Step 3: But if we try to print the value of sayHi variable it will print 'undefined'.
            
 */

// var sayHi = function () {
//   console.log("Hi");
// };

// sayHi();
/**
 * Take 3: function expression and calling after the function declaration
   Step 1: In MCP the JS engine will find that it's a function expression and it will not hoist this fucntion.
            Because function expression are not hoisted.
            But it will also encouter with 'var sayHi' and as we already know that engine puts 'undefined' as a value for variable declaration.
    Step 2: In execution phase, after executing the line 1 it will put the whole function body into sayHi varibale.
            now if we call sayHi(); it will work beacsue it has the function defination and will print
            the Hi on console.
 */

// var sayHi = function () {
//   console.log("Hi");
// };

// sayHi();

// var sayHi = function () {
//   console.log("Hey");
// };

// console.log(sayHi);

/**
 *  JS allows same function/function-expression defined again and again unline Java.
 *  You can also call a non-argument function with function unlike java.
 * It will simply not capture those argument in that function call.
 * And if you dont pass the arguments into a function which takes parametre
 */

// sayHello();

// function sayHello() {
//   var hello = function () {
//     console.log("Hello!!");
//   };

//   hello();

//   var hello = function () {
//     console.log("Hey!");
//   };
// }
/**
 * Take 1:
    Step 1:
    Step 2:
 */

sayHello();

function sayHello() {
  var hello = function () {
    console.log("Hello!");
  };

  hello();

  function hello() {
    console.log("Hey!");
  }
}

/**
 * Take 1:
    Step 1:
    Step 2:
 */
