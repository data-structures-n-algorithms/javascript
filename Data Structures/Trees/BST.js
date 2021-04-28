class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new Node(value);
    let cond = true
    if (this.root == null) {
      this.root = node;
    } else {
      let tempNode = this.root;
      while (cond) {
        if (node.value > tempNode.value) {
          if (tempNode.right == null) {
            tempNode.right = node;
            cond = false;
          } else {
            tempNode = tempNode.right;
          }
        } else if (node.value < tempNode.value) {
          if (tempNode.left == null) {
            tempNode.left = node;
            cond = false;
          } else {
            tempNode = tempNode.left;
          }
        } else {
          console.log(`Value ${value} already exists`);
        }
      }
    }
  }

  lookup(value) {
    let node = new Node(value);
    if (this.root == null) {
      console.log("Is Empty");
    } else if (this.root.value === node.value) {
      return this.root;
    } else {
      let tempNode = this.root;
      while (tempNode) { // == tempNode != null
        if (node.value > tempNode.value) {
          tempNode = tempNode.right;
        } else if (node.value < tempNode.value) {
          tempNode = tempNode.left;
        } else if (tempNode.value === node.value) {
          return tempNode;
        }
      }
      return null; // Error 404 - Node Not Found
    }
  }

  remove(value) {
    const node = new Node(value);
    let tempNode = this.root;
    let parentNode = null;
    while (tempNode !== null) {
      if (node.value > tempNode.value) {
        parentNode = tempNode
        tempNode = tempNode.right;
      } else if (node.value < tempNode.value) {
        parentNode = tempNode
        tempNode = tempNode.left;
      } else if (node.value === tempNode.value) {
        if (tempNode.right == null) { // Option 1: If selected Node doesn't have right child/children
          if (parentNode == null) {
            this.root = tempNode.left
          } else {
            if (tempNode.value > parentNode.value) {
              parentNode.right = tempNode.left
            } else if (tempNode.value < parentNode.value) {
              parentNode.left = tempNode.left
            }
          }
        } else if (tempNode.left == null) { // Option 2: If selected Node doesn't have left child/children
          if (parentNode == null) {
            this.root = tempNode.right
          } else {
            if (tempNode.value > parentNode.value) {
              parentNode.right = tempNode.left
            } else if (tempNode.value < parentNode.value) {
              parentNode.left = tempNode.left
            }
          }
        } else { // Option 3: If selected Node has both right and left child/children
          let replaceNode = tempNode.right
          let replaceNodeParent = tempNode

          if (replaceNode.left != null) {
            while (replaceNode.left != null) {
              replaceNodeParent = replaceNode
              replaceNode = replaceNode.left
            }
            replaceNodeParent.left = replaceNode.right
            replaceNode.right = tempNode.right
          }
          replaceNode.left = tempNode.left;
          if (parentNode == null) {
            this.root = replaceNode
          } else {
            if (tempNode.value > parentNode.value) {
              parentNode.right = replaceNode
            } else if (tempNode.value < parentNode.value) {
              parentNode.left = replaceNode
            }
          }
        }
        return true; // Node deleted sucessfully
      }
      return false; // Error 404 - Node Not Found
    }
  }
}