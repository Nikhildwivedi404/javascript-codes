// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

//let myCreatedDate = new Date(2024, 8, 4)
// let myCreatedDate = new Date(2024, 8, 4, 10, 15)
//let myCreatedDate = new Date("2024-08-4")
let myCreatedDate = new Date("8-4-2024")
//console.log(myCreatedDate.toDateString());

 let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleDateString('default',{
    weekday: "long"
   
})