const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI);

const month = {
    name: 'may',
    sumer:  5,
    isAvailable: true,

    orderMonth: function(){
        console.log("month nhi hai");
    }
}

// console.log(month);
console.log(Object.getOwnPropertyDescriptor(month,"name"));

Object.defineProperty(month, 'name',{
    // writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(month, "name"));


for (let [key, value] of Object.entries(month)){
    console.log(`${key} : ${value}`);
}