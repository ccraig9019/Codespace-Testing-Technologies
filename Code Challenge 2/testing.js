
class Student {
	constructor(firstName, lastName, age, height, employed) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.height = height;
		this.employed = employed;
	}
	
	get fullName() {
		return `${this.firstName} ${this.lastName}`
	}

    set fullName(name) {
		const components = name.split(" ");
		this.firstName = components[0];
		this.lastName = components[1];
	}


}

const student1 = new Student;

console.log(student1.fullName);

student1.fullName = "Bia Barbalho";

console.log(student1.fullName);