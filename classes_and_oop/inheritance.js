class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);

    }

}

const work = new Teacher("work", "work@teacher.com", "1234")

work.addCourse()


work.logMe()
const workSpace = new User("workSpace")

workSpace.logMe()

console.log(work instanceof User);