class Node {
  constructor(value) {
    this.left = null
    this.right = null
    this.value = value
  }
}

function search(value) {
  const node = new Node(value)

  if (this.root == null) {
    console.log('Is Empty')
    return
  }

  if (this.root.value === node.value) {
    return this.root
  }

  let tempNode = this.root
  while (tempNode) {
    if (node.value > tempNode.value) {
      tempNode = tempNode.right
    } else if (node.value < tempNode.value) {
      tempNode = tempNode.left
    } else if (tempNode.value === node.value) {
      return tempNode
    }
  }

  return null // Error 404 - Node Not Found
}
