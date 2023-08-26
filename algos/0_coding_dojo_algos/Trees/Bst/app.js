const BinarySearchTree = require("./Bst");

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
