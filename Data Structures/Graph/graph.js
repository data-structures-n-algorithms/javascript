class Graph {
  constructor() {
    this.numberOfNodes = 0
    this.adjacentList = {}
  }

  addVertex(node) {
    this.adjacentList[node] = []
    this.numberOfNodes++
  }

  // Comment/Remove the second line(#15) for Digraph
  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2)
    this.adjacentList[node2].push(node1)
  }
}
