const name ="nikhil"
const repoCount =50

//console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is  
    ${repoCount}`);


const gameName = new String('crickt')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('t'));

// const newString = gameName.substring(0,4)
// console.log(newString);


const anotherString = gameName.slice (2);
console.log(anotherString);

const newStringOne = "    nikhil    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url ="https://nikhil.com/nikhil%30Dwivedi"
console.log(url.replace('%30','-'));

console.log(url.includes('arya'))

console.log(gameName.split(' '));