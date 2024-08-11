// Object literals


const mySym = Symbol("Key1")
const JsUser = {
    name: "Nikhil",
    "full name": "nikhil dwivedi",
    [mySym]: "mykey1",
    age: 20,
    location: "Jaipur",
    email: "nikhildwivedi742@gmail.com",
    isLoggedIn: false,
    lastloginDays:["monday","saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "nikhil@chartgpt.com"
//Object.freeze(JsUser)

JsUser.email ="nikhil@google.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello nikhil");

}
JsUser.greetingTwo = function(){
    console.log(`Hello dwivedi ji, ${this.name}`);
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());