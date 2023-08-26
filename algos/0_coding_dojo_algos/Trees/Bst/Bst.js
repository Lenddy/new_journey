// trees are essentially linked list but they have one extra node that goes to the left

class BstNode {
	constructor(data) {
		this.left = null;
		this.data = data;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	// checks if the tree is empty
	isEmpty() {
		if (this.root == null) return true;
	}

	//looks for the smallest int data in the tree
	min(current = this.root) {
		//we iterate over the tree
		while (current.left !== null) {
			current = current.left;
		}
		return current.data;
	}

	//looks for the largest int data in the tree
	max(current = this.root) {
		// iterate over the right side of the tree
		while (current.right !== null) {
			current = current.right;
		}
		return current.data;
	}

	// fine out if the given value is inside of the tree and returns a bool
	contains(searchVal) {
		// check if the tree is empty
		if (this.isEmpty()) {
			return false;
		}
		let current = this.root;
		// iterate over the tree

		while (current !== null) {
			//if the given value is found return true else return false
			if (current.data !== null) {
				if (searchVal == current.data) {
					console.log("is == in the left");
					return true;
				} else if (searchVal < current.data) {
					console.log("is smaller");
					current = current.left;
				}
			}

			if (current.data !== null) {
				if (searchVal == current.data) {
					console.log("is == in the right");
					return true;
				} else if (searchVal > current.data) {
					console.log("is bigger");
					current = current.right;
				}
			}
		}
		return false;
	}

	insert(val) {
		// check if the tree is empty
		const node = new BstNode(val);
		if (this.isEmpty()) {
			this.root = node;
			return this;
		}

		let current = this.root;

		// iterate over the tree
		while (current !== null) {
			// determine if the curent leaf node data is bigger or smaller that the data that was imputed
			// if it is smaller go to the left
			if (val < current.data) {
				if (current.left == null) {
					current.left = node;
					current = current.left;
					return this;
				} else {
					current = current.left;
				}
			}
			//if it is bigger go to the right
			if (val > current.data) {
				if (current.right === null) {
					current.right = node;
					current = current.right;
					return this;
				} else {
					current = current.right;
				}
			}
		}
		// ! you need to put this out side
		// if the current leaf node is == to null that add the inputted data into that leaf

		// current.data = node;
		// return this;
	}
}

const bst = new BinarySearchTree();
console.log(bst);

// console.log(bst.isEmpty());

bst.insert(10);
bst.insert(8);
bst.insert(13);
bst.insert(7);
bst.insert(9);
bst.insert(11);
bst.insert(15);
console.log(bst.min());
console.log(bst.max());

console.log(bst.contains(11));


module.exports = BinarySearchTree;
