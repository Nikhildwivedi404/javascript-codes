const user = {
    username: "nikhil",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);



function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;


    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}


// 1 = new keyword use by in first time emity object create ask
// new object crate
// 2 = constructor keyword create hota hai new keyword ki yijhasa
//  3 = this keyword ke under add hone  orgiment likha hai us me inject hone
// 4 = function under mil jata hai

const userOne = new User("nikhil", 12, true)
const userTwo = new User("Javascript", 11, false)
console.log(userOne.constructor);
// console.log(userTwo);