class Person {
	constructor(name) {
		this.name = name;
	}

	greet() {
		console.log(`Hello ${this.name}`);
	}
}


class Student extends Person {
	constructor(name, level) {
		super(name);
		this.level = level;
	}

	greet() {
		console.log(`Welcome ${this.name} from ${this.level}`);
	}
}

const o1 = new Person('Muhammed');
const o2 = new Student('Ali', '2nd Grade');
const o3 = new Student('Kamal', '3rd Grade');


o3.greet = () => {
	console.log(`I'm special :)`);
}


o1.greet();
o2.greet();
o3.greet();







