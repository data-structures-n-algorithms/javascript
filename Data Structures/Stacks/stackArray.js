// Stack using Array

class Stack {
  constructor() {
    this.stack = []
  }

  isEmpty() {
    if (this.stack.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Is empty");
    } else {
      return this.stack[this.stack.length - 1];
    }
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Is Empty");
    } else {
      this.stack.pop();
    }
  }
}