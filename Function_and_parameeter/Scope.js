// let a = 11
// const b = 30
// var c = 34

// var c = 400

let a =500  
if (true) {
    let a = 11
    const b = 30
    // var c = 34
    // console.log("INNER: ", a);
}

// for (let i = 0; i < Array.length; i++) {
//     const element = array[i];
//}

//console.log(a)
// console.log(b)
// console.log(c)

function one (){
    const username = "nikhil"

    function two (){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}

//one()


if (true) {
    const username = "nikhil"
    if (username === "nikhil") {
        const website = " youtube"
        // console.log(username + website);

    }
    // console.log(website);

}
// console.log(username);


//**********************interesting*************** */

 console.log (addone(5));
function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}

// addTwo(5)