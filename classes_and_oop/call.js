function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log("called");
}

function createdUser(username, email, password){
    SetUsername.call(this,username)

    this.email = email
    this.password = password
}

const chai = new createdUser("chai", "google@.com", "1234")
console.log(chai);
