// Stack implemented in Array

class Stack {
  constructor() {
    this.stack = []
  }

  // Returns true if the stack contains no elements
  isEmpty() {
    if (this.stack.length === 0) return true

    return false
  }

  // Returns the element at the top of the stack
  peek() {
    if (this.isEmpty()) return -1

    return this.stack[this.stack.length - 1]
  }

  // Inserts the specified element onto the top of the stack
  push(value) {
    this.stack.push(value)
  }

  // Removes and returns the element at the top of the stack
  pop() {
    if (this.isEmpty()) return -1

    this.stack.pop()
    return this.peek()
  }
}
