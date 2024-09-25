class User {
    constructor(username) {
        this._username = username;
    }

    stateYourRole() {
        throw new Error("Cannot use method in abstract class.");
    }

    get getUsername() {
        return this._username;
    }

    set setUsername(name) {
        this._username = name;
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
console.log(admin.stateYourRole() + " " + admin.getUsername);

const viewer = new Viewer;
viewer.setUsername = "Melchior";
console.log(viewer.stateYourRole() + " " + viewer.getUsername);