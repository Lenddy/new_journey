const BinarySearchTree = require("./Bst");

const bst = new BinarySearchTree();
console.log(bst);

// console.log(bst.isEmpty());

bst.insert(25);
bst.insert(15);
bst.insert(50);
bst.insert(10);
bst.insert(35);
bst.insert(22);
bst.insert(70);
bst.insert(4);
bst.insert(31);
bst.insert(12);
bst.insert(44);
bst.insert(18);
bst.insert(66);
bst.insert(24);
bst.insert(90);

// console.log(bst.min());
// console.log(bst.max());

// console.log(bst.contains(11));
// console.log(bst.containsRecursive(100));
// console.log(bst.range());

// console.log("pre");
// console.log(bst.toArrPreOrder());
// console.log("in");
// console.log(bst.toArrInOrder());
// console.log("post");
// console.log(bst.toArrPostOrder());

console.log(bst.toArrayLevelOrder());
