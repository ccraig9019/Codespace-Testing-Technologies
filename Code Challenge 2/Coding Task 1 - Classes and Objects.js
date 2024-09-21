function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.hello = function() {
        return "Hello, " + this.firstName + " " + this.lastName;
    }
}

const user1 = new User("John", "Doe");
const user2 = new User("Jane", "Doe");

console.log(user1.hello());
console.log(user2.hello());