function sayMyName(){
    console.log("N");
    console.log("I");
    console.log("k");
    console.log("H");
    console.log("I");
    console.log("L");
}

//sayMyName()

// function addTwoNumbers(number1, number2){
//    console.log (number1 +  number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number + number2 
    // return result
    //console.log("nikhil")
    return number1 + number2
}

const  result = addTwoNumbers(4,5)

//console.log("Result: ", result); 
// addTwoNumbers(55,5)

function loginUserMessage(username){
   // if(username === undefined){
   if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
 
//console.log(loginUserMessage("nikhil"));
// console.log(loginUserMessage());



// function calculateCartPrice(...num1){
    function calculateCartPrice(val1, val2,...num1){
    return num1
}

//console.log(calculateCartPrice(200, 400, 500,100));


const user = {
    username: "nikhil",
    price: 299
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is 
        ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "ram",
    price:100
})


const myNewArray = [100, 200, 300, 400]

function returnSecondValue(getArray){
    return getArray[3]
}

console.log(returnSecondValue(myNewArray));

