/*
 1. Variable hoising

JavaScript Engine :  
It is a programme which reads and runs JavaScript code. It’s the core of what makes it possible to run your beautiful code in web browsers. For now, it’s enough to know that it does its job in two phases: the memory creation phase and the execution phase, and that our code won’t be executed until the second phase.

*/

//console.log(x);

/*
Take 1 : 
  Step 1: In MCP the JS engine will not find any variable declaration to hoist.
  Step 2 : In Execution phase, engine will try to print 'x' but does not exist in the memory.
           So an exception will be thrown : ReferenceError: x is not defined
  */

// console.log(x);
// var x;

/*
 * Take 2 : 
    Step 1: In MCP the JS engine will find 'x' declaration and will put this into memory
    and will initialize it with 'undefined'.
    Step 2: In Execution phase, engine will try to find the value of 'x' and it fill 'undefined' and hence will print the same.


    The above code is same as below : 
    // var x;
    // console.log(x);

 */

// console.log(x);
// var x = 10;

// console.log(x);
// var x = 10;
// console.log(10);

/*
 * Take 3 : 
   Step 1: In MCP the JS engine will find 'x' declaration and will put this into memory
    and will initialize it with 'undefined'.
   Step 2: In Execution phase, engine will try to find the value of 'x' and it fill 'undefined' and hence will print the same.

   This is really surpring, right!! we have initialized x to 10 and still it print undeined.
   The reason is that only 'variable declarions are hoisted not initialization'.
   if we try to print x after the initilization line (which is 3) it will work as expected.

 */

// var x;
// console.log(x);
// x = 10;
// console.log(10);

// same as Take 3

// var x = 1;
// console.log(x);
// var x = 2;
// console.log(x);

/**
 * Take 4: JS allows same variable defined again and again unline Java. 
 * Im not sure why.
    Step 1:
    Step 2:
 */
