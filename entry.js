const readlineSync = require('readline-sync');


var completeBiTree = readlineSync.question('Please input full binary tree, use # to take place of empty node: ');
console.log(completeBiTree);

var tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4
    }
  },
  right: {
    value: 3,
    left: {
      value: 5,
      left: {
        value: 7
      },
      right: {
        value: 8
      }
    },
    right: {
      value: 6
    }
  }
}
var reverseBinaryTree = function(node) {
    if(!node.right && !node.left) {
    	return;
    }
	var temp = node.right;
	node.right = node.left;
	node.left = temp;

	if(node.right) {
		reverseBinaryTree(node.right);
	}
	if(node.left) {
		reverseBinaryTree(node.left);
	}
	return node;
} 
console.log(reverseBinaryTree(tree));