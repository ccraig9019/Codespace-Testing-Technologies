class User { //declaring User class
    constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    }
    
    set fullName(name) { //setter method to assign values to firstName and lastName of objects
        const parts = name.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }

    get fullName() { //getter method to return the user's full name
        return `${this.firstName} ${this.lastName}`;
        }
    
    hello() { 
    return "Hello World!"
    }
    
}

const user1 = new User();

user1.fullName = "Max Power";

console.log(user1.hello());
console.log(`My name is ${user1.fullName}`)