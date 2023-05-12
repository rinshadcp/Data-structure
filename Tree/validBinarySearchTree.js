function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
  
  function isValidBST(root) {
    return validate(root, null, null);
  }
  
  function validate(node, min, max) {
    if (node === null) return true;
  
    if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
      return false;
    }
  
    return validate(node.left, min, node.val) && validate(node.right, node.val, max);
  }
  const root = new Node(2);
root.left = new Node(3);
root.right = new Node(3);

console.log(isValidBST(root)); // Output: true
