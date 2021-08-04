// Queue implemented in Linked List

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }

  // Returns true if the queue contains no elements
  isEmpty() {
    if (this.length === 0) return true

    return false
  }

  // Returns the element at the front of the queue.
  peek() {
    if (this.isEmpty()) return -1

    return this.first
  }

  // Inserts the specified element at the rear of the queue
  enqueue(value) {
    const newNode = new Node(value)

    if (this.length === 0) {
      this.first = newNode
    } else {
      this.last.next = newNode
    }

    this.last = newNode
    this.length++
  }

  // Removes and returns the element at the front of the queue
  dequeue() {
    if (this.isEmpty()) return -1

    this.first = this.first.next
    this.length--

    return this.peek()
  }
}
