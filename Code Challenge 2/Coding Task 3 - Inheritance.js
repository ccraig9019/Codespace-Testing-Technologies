class User {
    constructor (username) {
        this.username = username;
    }

    set changeUsername(value) {
        this.username = value;
    }
}

class Admin extends User {
  
    expressYourRole() {
        return "Admin";
    }

    sayHello() {
        return `Hello admin ${this.username}`;
    }
}

admin1 = new Admin;

admin1.changeUsername = "Balthazar";

console.log(admin1.sayHello());