function receivesAFunction(callback) {
    // Call the callback function
    callback();
  }
  
  // Example usage:
  function myCallback() {
    console.log("Callback function was called!");
  }
  
  // Call receivesAFunction and pass myCallback as the callback function
  receivesAFunction(myCallback);

  function returnsANamedFunction() {
    // Define a named function inside the outer function
    function innerFunction() {
        // This is the body of the named function
        console.log("This is a named function returned by returnsANamedFunction");
    }
    
    // Return the named function
    return innerFunction;
}



function returnsAnAnonymousFunction(){
   return function () {
        console.log("This is an anonymous function");

    }
}