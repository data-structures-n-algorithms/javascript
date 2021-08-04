class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }

  _hash(key) {
    let hash = 0 // higher the hash, higher the number of indexes and less collisions will occur
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }

    return hash
  }

  set(key, value) {
    const address = this._hash(key)
    if (!this.data[address]) {
      this.data[address] = []
    }

    this.data[address].push([key, value])
    return this.data
  }

  get(key) {
    const address = this._hash(key)
    const currentBacket = this.data[address]

    if (currentBacket) {
      for (let i = 0; i < currentBacket.length; i++) {
        if (currentBacket[i][0] === key) return currentBacket[i][1]
      }
    }

    return -1
  }
}
