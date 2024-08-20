// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const nikhil = new User("nikhil", "nikhil@gmail.com", "123")

console.log(nikhil.encryptPassword());
console.log(nikhil.changeUsername());

// behind the scene


function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}



User.prototype.encryptPassword =function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const nik = new User("nik", "nik@gmail.com", "1234")

console.log(nikhil.encryptPassword());
console.log(nikhil.changeUsername());




