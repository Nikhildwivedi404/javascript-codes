const User = {
    _email: 'n@nik.com',
    _password: "abcd",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const ni = Object.create(User)
console.log(ni.email);