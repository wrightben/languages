const Square = class  {

	/* Private fields are "hash named" */

	#height = 0;
	
	/*
		Constructor is either implicitly or explicitly called.
		Implicit calls automatically call super
		Explicit calls must implement a	call to super.
	*/

	constructor(length) {
		this.height = length;
		this.width = length;
	}

	/* 
		get and set methods are invoked with the = operator, they're not functions.
	*/

	get area() {
		return this.height * this.width;
	}

	set area(value) {
		this.height = value**0.5;
		this.width = value**0.5;
	}

	get height() {
		return this.#height;
	}

	set height(length) {
		this.#height = length;
	}
	
	getDoubleArea() {
		return this.area * 2;
	}
  
}

var s = new Square(5);

console.log( s.area = 36, s.height, s.getDoubleArea() );