class Node {
  constructor(value) {
    this.left = null
    this.right = null
    this.value = value
  }
}

function bfs() {
  let currentNode = this.root
  const queue = []
  const list = []

  queue.push(currentNode)

  while (queue.length > 0) {
    currentNode = queue.shift()
    list.push(currentNode.value)

    if (currentNode.left) {
      queue.push(currentNode.left)
    }

    if (currentNode.right) {
      queue.push(currentNode.right)
    }
  }

  return list
}

function bfsRecursion(queue, list) {
  if (!queue.length) {
    return list
  }

  const currentNode = queue.shift()
  list.push(currentNode.value)

  if (currentNode.left) {
    queue.push(currentNode.left)
  }

  if (currentNode.right) {
    queue.push(currentNode.right)
  }

  return this.bfsRecursion(queue, list)
}
