// Stack implemented in Linked List

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null
    this.bottom = null
    this.length = 0
  }

  // Returns true if the stack contains no elements
  isEmpty() {
    if (this.length === 0) {
      return true
    }
    return false
  }

  // Returns the element at the top of the stack
  peek() {
    if (this.isEmpty()) return -1
    return this.top
  }

  // Inserts the specified element onto the top of the stack
  push(value) {
    const newNode = new Node(value)

    if (this.isEmpty()) {
      this.bottom = newNode
      this.top = this.bottom
    } else {
      newNode.next = this.top
    }

    this.top = newNode
    this.length++
  }

  // Removes and returns the element at the top of the stack
  pop() {
    if (this.isEmpty()) return -1

    this.top = this.top.next
    if (this.length === 1) this.bottom = null

    this.length--
    return this.peek()
  }
}
