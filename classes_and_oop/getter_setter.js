class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }


    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }
    // get password(){
    //     return this._password.toUpperCase()
    // }
    get password(){
        return`${this._password}nikhil`
    }

    // set password(value){
    //     this._password = value.toUpperCase()
    // }
    set password(value){
        this._password = value
    }
}

// const nikhil = new User("nik@nikhil.ai", "123")
// console.log(nikhil.password);

const nikhil = new User("nik@nikhil.ai", "abc")
console.log(nikhil.password);
console.log(nikhil.email);