// Queue implemented in Array

class Queue {
  constructor() {
    this.queue = []
  }

  // Returns true if the queue contains no elements
  isEmpty() {
    if (this.queue.length === 0) return true

    return false
  }

  // Returns the element at the front of the queue.
  peek() {
    if (this.isEmpty()) return -1

    return this.queue[0]
  }

  // Inserts the specified element at the rear of the queue
  enqueue(value) {
    this.queue.push(value)
  }

  // Removes and returns the element at the front of the queue
  dequeue() {
    if (this.isEmpty()) return -1

    this.queue.shift()
    return this.peek()
  }
}
