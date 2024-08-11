const user = {
    username: "nikhil",
    price: 400,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        //console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai (){
//     let username = "nikhil"
//     console.log(this)
// }

// chai()

// const chai = function (){
// let username = "nikhil"
// console.log(this.username);
// }

// const chai = () => {
//     let username = "nikhil"
//     console.log(this.username);
//     console.log(this);
// }

// chai()



// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(5,8));



// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(5, 5));

// const addTwo = (num1, num2) => (num1 + num2 )
// console.log(addTwo(5,3));

const addTwo = (num1, num2) => ({username: "nikhil"})
console.log(addTwo(4,2));
