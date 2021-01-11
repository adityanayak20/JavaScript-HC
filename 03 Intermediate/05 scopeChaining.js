var name  = "Aditya";

console.log("Line number 3", name);

function sayName() {
 // var name = "Mr. A";
  console.log("Line number 7", name);
  sayNameTwo();

  function sayNameTwo() {
    //var name = "Mr. AN";
    console.log("Line number 11", name)
  }
}

sayName();