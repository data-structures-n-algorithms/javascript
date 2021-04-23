// Queue implemented in Linked List

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  isEmpty() {
    if (this.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Is Empty");
    } else {
      return this.first;
    }
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }
    this.last = newNode;
    this.length++;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Is Empty");
    } else {
      this.first = this.first.next;
      this.length--;
    }
  }
}