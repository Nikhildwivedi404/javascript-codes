// Immediately Invoked Function Expresstons (IIFE)

//Named IIFE

(function chai (){
    console.log(`DB CONNECTED`);
}) ();

// chai()

//  simple IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ('nikhil');