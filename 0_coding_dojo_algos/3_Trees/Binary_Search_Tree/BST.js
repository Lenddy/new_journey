class BstNOde {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class binarySearchTree {
	constructor() {
		this.root = null;
	}

	// checks if the BST is empty
	isEmpty() {}

	// retrieves the smallest int data from the tree
	min(current = this.root) {}

	// retrieves the largest int data from the tree
	max(current = this.root) {}

	// determins if this tree contains the given value
	contains(searchVal) {}

	insert(val) {}
}

module.exports = binarySearchTree;
