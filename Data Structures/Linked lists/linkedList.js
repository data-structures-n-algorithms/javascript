class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    }
    this.tail = this.head
    this.length = 1
  }

  // Returns true if the list contains no elements
  isEmpty() {
    if (this.length === 0) return true

    return false
  }

  // Returns the number of elements in the list
  size() {
    return this.length
  }

  // Inserts the element at the first position in the list
  append(value) {
    const newNode = new Node(value)

    this.tail.next = newNode
    this.tail = newNode
    this.length++
  }

  // Inserts the element at the last position in the list
  prepend(value) {
    const newNode = new Node(value)

    newNode.next = this.head
    this.head = newNode
    this.length++
  }

  // Inserts the element at the specified position
  insert(index, value) {
    if (index <= 0) {
      this.prepend(value)
      return
    }

    if (index >= this.length || this.isEmpty()) {
      this.append(value)
      return
    }

    let node = this.head
    for (let i = 0; i < index - 1; i++) {
      node = node.next
    }

    const newNode = new Node(value)
    newNode.next = node.next
    node.next = newNode

    this.length++
  }

  // Returns the first element of the list
  getFirst() {
    if (this.isEmpty()) return null

    return this.head.value
  }

  // Returns the last element of the list
  getLast() {
    if (this.isEmpty()) return null

    return this.tail.value
  }

  // Returns the element at the specified position in the list
  get(index) {
    if (this.isEmpty()) return null

    if (index >= this.length) {
      console.log('Cannot get: Index is larger than length')
      return null
    }

    if (index === 0) return this.getFirst()

    if (index === this.length - 1) return this.getLast()

    let tempNode = this.head
    for (let i = 0; i < index; i++) {
      tempNode = tempNode.next
    }

    return tempNode.value
  }

  // Returns the position of the first occurrence of the element
  // or returns -1 if the element is not in the list
  find(value) {
    if (this.isEmpty()) return null

    let tempNode = this.head
    for (let i = 0; i < this.length; i++) {
      if (tempNode.value === value) return i

      tempNode = tempNode.next
    }

    return -1
  }

  // Removes and returns the element at the first position in the list
  removeFirst() {
    if (this.isEmpty()) {
      console.log('Is empty')
      return null
    }

    this.head = this.head.next
    this.length--
    return this.getFirst()
  }

  // Removes and returns the element at the last position in the list
  removeLast() {
    if (this.isEmpty()) {
      console.log('Is empty')
      return null
    }

    let newTail = this.head
    for (let i = 0; i < this.length - 2; i++) {
      newTail = newTail.next
    }

    newTail.next = this.tail.next
    this.tail = newTail

    this.length--
    return this.getLast()
  }

  // Removes and returns the element at the specified position in the list
  remove(index) {
    if (this.isEmpty()) {
      console.log('Is empty')
      return null
    }

    if (index >= this.length) {
      console.log('Cannot remove: Index is larger than length')
      return null
    }

    if (index === 0) return this.removeFirst()

    if (index === this.length - 1) return this.removeLast()

    let node = this.head
    for (let i = 0; i < index - 1; i++) {
      node = node.next
    }

    const aux = node.next
    node.next = aux.next

    this.length--
    return this.get(index)
  }

  // Removes the first occurrence of the element and returns true,
  // or false if the element is not in the list
  removeElement(value) {
    if (this.isEmpty()) {
      console.log('Is empty')
      return null
    }

    if (this.head.value === value) {
      this.removeFirst()
      return true
    }

    if (this.tail.value === value) {
      this.removeLast()
      return true
    }

    let tempNode = this.head
    for (let i = 0; i < this.length - 1; i++) {
      if (tempNode.next.value === value) {
        const aux = tempNode.next
        tempNode.next = aux.next

        this.length--
        return true
      }

      tempNode = tempNode.next
    }

    return false
  }
}
