class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return globalThis;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  BFS() {
    let node = this.root;
    let queue = [];
    let data = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  DFSPreOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
  DFSPostOrder(){
    let data=[]
    function traverse(node){
        node.left && traverse(node.left)
        node.right && traverse(node.right)
        data.push(node.value)

    }
    traverse(this.root)
    return data

  }
}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(15);
bst.insert(8);
bst.insert(20);
bst.insert(3);
bst.insert(11);
bst.insert(15);
console.log(bst);
console.log(bst.find(20));
console.log(bst.BFS());
console.log(bst.DFSPreOrder())
console.log(bst.DFSPostOrder())