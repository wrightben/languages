class Node {
	constructor(data) {
		this.data = data;
		this.nextNode = null;
	}
};


// let node = new Node("A");
// console.log(node);


class LinkedList {
	
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}
	
};

LinkedList.prototype.add = function(data) {
	let newNode = new Node(data);
	if (this.head === null) {
		this.head = newNode;
		this.tail = newNode;
	} else {
		this.tail.nextNode = newNode;
		this.tail = newNode;
	}
	this.size ++;
};


LinkedList.prototype.delete = function(data) {
	if (this.head === null) { return; }
	if (this.head.data === data) {
		this.head = this.head.nextNode;
		this.size --;
		return;
	}
	let current = this.head;
	while (current.nextNode !== null) {
		if (current.nextNode.data === data) {
			current.nextNode = current.nextNode.nextNode;
			this.size --;
			return;
		}
		current = current.nextNode;
	}
	
};


LinkedList.prototype.traverse = function() {
	let current = this.head;
	while (current !== null) {
		console.log(current.data);
		current = current.nextNode;
	}
}



let LL = new LinkedList();
LL.add("A");
LL.add("B");
console.log(LL);

LL.add("C");

LL.traverse();
LL.delete("A");

console.log(LL);

LL.traverse();