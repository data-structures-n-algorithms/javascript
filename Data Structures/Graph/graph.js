class Graph { 
  constructor() { 
    this.numberOfNodes = 0;
    this.adjacentList = {}; 
  }

  addVertex(node)  { 
    this.adjacentList[node] = []
    this.numberOfNodes++;
  } 

  addEdge(node1, node2) { // Comment the second line(#14) for a Digraph
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }  
} 