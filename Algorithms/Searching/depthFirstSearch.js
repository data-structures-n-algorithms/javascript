class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

function dfs() {
  let currentNode = this.root;
  let list = [];
  let queue = [];
  queue.push(currentNode);

  while (queue.length > 0) {
    currentNode = queue.pop();
    list.push(currentNode.value);
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
  }
  return list;
}

function dfsRecursion(node, list) {
  list.push(node.value);
  if (node.left) {
    dfsRecursion(node.left, list);
  }
  if (node.right) {
    dfsRecursion(node.right, list);
  }
  return list;
}