//stack class
class Stack {
	constructor() {
		this.items = []; // where the items are going to be hold
	}
	// adds a new item to the top/back of the stack
	push(item) {
		// call an array
		this.items.push(item);
		// add the new element in the stack
	}

	//removes the top/last item in the stack
	pop() {
		this.items.pop();
	}

	// retrieves the top/last item in the list with out removing it
	peek() {
		return this.items[this.items.length - 1];
	}

	// check to see if the stack is empty
	isEmpty() {
		if (this.items === null || this.items === 0) return true;
	}

	// gives you the size of the stack
	size() {
		return this.items.length;
	}
}

class StackNode {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class LikedListStack {
	constructor() {
		this.head = null; // where the items are going to be hold
		this.tail = null;
		this.length = 0;
	}
	// adds a new item to the top/back of the stack
	push(item) {
		// call an array
		const node = new StackNode(item);
		let current = this.head;

		if (this.isEmpty()) {
			current = node;
			this.tail = current;
			this.length++;
			return this.tail;
		}
		// if (current === null) {
		// 	current = node;
		// 	this.tail = current.next;
		// 	this.length++;
		// 	return this.tail;
		// }

		while (current.next) {
			current = current.next;
		}

		// add the new element in the stack
		current.next = node;
		this.tail = current.next;
		this.length++;
		return this.tail;
	}

	//removes the top/last item in the stack
	pop() {
		const prev = null;
		const current = this.head;

		if (this.isEmpty()) {
			return "no items";
		}

		while (current.next) {
			prev = current;
			if (current.next == null) {
				this.tail = prev;
				prev.next = null;
				this.length--;
				return this.tail;
			}
			current = current.next;
		}
	}

	// retrieves the top/last item in the list with out removing it
	peek() {
		return this.tail;
	}

	// check to see if the stack is empty
	isEmpty() {
		if (this.head == null) return true;
	}

	// gives you the size of the stack
	size() {
		return this.length;
	}
}

const l = new LikedListStack();

l.push(3);
l.push(2);
l.push(1);
l.push(0);
l.pop();
console.log(l);
console.log(l.peek());
console.log(l.size());

module.exports = { Stack, LikedListStack };

class MinMaxStack {
	constructor() {
		this.numbers = [];
		this.min = null;
		this.max = null;
	}
	peek() {
		// Write your code here.
		return this.numbers[numbers.length - 1];
	}

	pop() {
		// Write your code here.
		return this.numbers.pop();
	}

	push(number) {
		// Write your code here.\
		this.numbers.push(number);

		if (this.min === null) {
			this.min = this.numbers[0];
		}
		if (this.max === null) {
			this.min = this.numbers[0];
		}
		if (this.numbers.length > 1) {
			if (number < this.min) {
				this.min = number;
			}
			if (number > this.max) {
				this.max = number;
			}
		}

		return this.numbers;
	}

	getMin() {
		// Write your code here.
		return this.min;
	}

	getMax() {
		// Write your code here.
		return this.max;
	}
}
