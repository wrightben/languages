function Person(first, last, age) {
	this.firstName = first;
	this.lastName = last;
	this.age = age;
// 	this.name = function() {
// 		return this.firstName + " " + this.lastName;
// 	};
}

Person.prototype.name = function() {
	return this.firstName + " " + this.lastName;
}


var John = new Person("John", "Doe", 30);

console.log( John.name() );