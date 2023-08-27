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
					return true;
				} else if (searchVal < current.data) {
					current = current.left;
				}
			}
			if (current.data !== null) {
				if (searchVal == current.data) {
					return true;
				} else if (searchVal > current.data) {
					current = current.right;
				}
			}
		}
		return false;
	}

	containsRecursive(searchVal, current = this.root) {
		//! returns a bool

		// make the base case
		//if the current node is == null that also pull us out of the recursion
		if (current === null) {
			return false;
		}
		//if the search val is == to the current node data then stop the loop
		if (searchVal == current.data) {
			return true;
		}
		//find out if the  searchVal is bigger or smaller than the current node data
		// if it is smaller move to the left
		if (searchVal < current.data) {
			return this.containsRecursive(searchVal, current.left);
		}

		//if  it is bigger that move the right
		if (searchVal > current.data) {
			return this.containsRecursive(searchVal, current.right);
		}
	}

	// calculate the rage (max - min) from the given startNode
	range(startNode = this.root) {
		return this.max() - this.min();
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
	}

	// dfs preOrder:  (currNode, lest , right)
	// converts this BST into an array following depth first search preOrder
	toArrPreOrder(current = this.root, vals = []) {
		// check to see if the three is empty and returns the values in the array
		if (this.isEmpty()) {
			return vals;
		}
		//  checks to see if there is a node to available
		if (current) {
			vals.push(current.data); // adds the currents node data to the array
			this.toArrPreOrder(current.left, vals); // recursively loops until there is no more nodes to the left
			this.toArrPreOrder(current.right, vals); // recursively loops until there is no more nodes to the right
		}
		return vals; // returns the array with the values from left
	}

	toArrInOrder(current = this.root, vals = []) {
		if (this.isEmpty()) {
			return vals;
		}
		if (current) {
			this.toArrInOrder(current.left, vals);
			vals.push(current.data);
			this.toArrInOrder(current.right, vals);
		}
		// console.log(vals);
		return vals;
	}
	toArrPostOrder(current = this.root, vals = []) {
		if (this.isEmpty()) {
			return vals;
		}
		if (current) {
			this.toArrPostOrder(current.left, vals);
			this.toArrPostOrder(current.right, vals);
			vals.push(current.data);
		}
		// console.log(vals);
		return vals;
	}
}

// const bst = new BinarySearchTree();
// console.log(bst);

// // console.log(bst.isEmpty());

// bst.insert(10);
// bst.insert(8);
// bst.insert(13);
// bst.insert(7);
// bst.insert(9);
// bst.insert(11);
// bst.insert(15);
// console.log(bst);
// // console.log(bst.min());
// // console.log(bst.max());

// // console.log(bst.contains(11));
// // console.log(bst.containsRecursive(100));
// // console.log(bst.range());

// console.log(bst.toArrPreOrder());

module.exports = BinarySearchTree;
