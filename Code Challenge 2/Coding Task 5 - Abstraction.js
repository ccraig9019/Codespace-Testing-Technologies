class User {
    constructor(username) {
        this.username = username;
    }

    stateYourRole() {
    }

    get getUsername() {
        return this.username;
    }

    set setUsername(name) {
        this.username = name;
    }
}

class Admin extends User {
    stateYourRole() {
        return "admin";
    }
}

class Viewer extends User {
    stateYourRole() {
        return "viewer";
    }
}

const admin = new Admin;
admin.setUsername = "Balthazar";
console.log(admin.stateYourRole());

const viewer = new Viewer;
viewer.setUsername = "Melchior";
console.log(viewer.stateYourRole());