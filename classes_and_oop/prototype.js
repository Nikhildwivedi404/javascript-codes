// let myName = "nikhil    "


// // console.log(myName.truelength);
// console.log(myName.trim().length);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.nikhil = function(){
    console.log(`nikhil is present in all object`);
}


Array.prototype.heynikhil = function(){
    console.log(`nikhil says hello`);
}

// heroPower.nikhil()
// myHeros.nikhil()
// myHeros.heynikhil()
// heroPower.heynikhil()


// inheritance

const User = {
    name: "mast",
    email:"@google.com"
}

const Teacher = {
    makeVideo: true
}

const TechingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TechingSupport
}

Teacher.__proto__ = User

// modern syntax
// Object.setPrototypeOf(TeachingSupport, Teacher)



let anotherUsername = "javascript   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}


anotherUsername.trueLength()
"nikhil".trueLength()
"another".trueLength()