// Queue implemented in Array

class Queue {
  constructor() {
    this.queue = [];
  }

  isEmpty() {
    if (this.queue.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Is Empty");
    } else {
      return this.queue[this.queue.length - 1];
    }
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Is Empty");
    } else {
      this.queue.shift();
    }
  }
}