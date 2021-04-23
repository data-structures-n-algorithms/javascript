// Stack using Linked List

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
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
      console.log("Is empty");
    } else {
      return this.top;
    }
  }

  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.bottom = newNode;
      this.top = this.bottom;
    } else {
      newNode.next = this.top;
    }
    this.top = newNode;
    this.length++;
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Is Empty");
      return;
    } else {
      this.top = this.top.next;
    }
    if (this.length === 1) {
      this.bottom = null;
    }
    this.length--;
  }
}