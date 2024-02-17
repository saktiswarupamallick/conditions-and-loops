//Loops are programming constructs that allow a set of instructions to be repeatedly executed until a certain condition is met. They are essential for automating repetitive tasks, iterating over collections of data, and performing sequential operations.

//for loop
for (initialization; condition; increment/decrement) {
    // code to be executed in each iteration
  }

  for (var i = 1; i <= 5; i++) {
    console.log("Iteration " + i);
  }

  //while loop
  while (condition) {
    // code to be executed in each iteration
  }
  var i = 1;
  while (i <= 5) {
    console.log("Iteration " + i);
    i++;
  }
//do while

do {
    // code to be executed in each iteration
  } while (condition);

  
  var i = 1;
do {
  console.log("Iteration " + i);
  i++;
} while (i <= 5);
