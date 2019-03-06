class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    } else {
      return false;
    }
  }
  
  addEdge(v1, v2) {
    if (this.adjacencyList.hasOwnProperty(v1) &&
    this.adjacencyList.hasOwnProperty(v2)) {
      if (!this.adjacencyList[v1].includes(v2)) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
        return true;
      }
    }
    return false;
  }
  
  removeEdge(v1, v2) {
    if (this.adjacencyList.hasOwnProperty(v1) &&
    this.adjacencyList.hasOwnProperty(v2)) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter(ele => {
        return ele !== v2;
      });
      this.adjacencyList[v2] = this.adjacencyList[v1].filter(ele => {
        return ele !== v1;
      });
      return true;
    } else {
      return false; 
    }
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      let targetEdges = this.adjacencyList[vertex];
      targetEdges.forEach(city => {
        this.adjacencyList[city] = this.adjacencyList[city].filter(ele => {
          return ele !== vertex;
        });
      });
      delete this.adjacencyList[vertex];
      return true;
    } else {
      return false; 
    }
  }

  depthFirstRecursive(start) {
    let results = [];
    let haveVisited = {};
    let traverse = (vertex) => {
      haveVisited[vertex] = true;
      results.push(vertex);
      this.adjacencyList[vertex].forEach(edge => {
        if (haveVisited[edge] === undefined) traverse(edge);
      });
    }
    traverse(start);
    return results;
  }

  depthFirstIterative(start) {
    let stack = [start];
    let results = [];
    let visited = {};
    visited[start] = true;
    let vertex, edges;
    while (stack.length) {
      vertex = stack.pop();
      results.push(vertex);
      edges = this.adjacencyList[vertex];
      edges.forEach(edge => {
        if (visited[edge] === undefined) {
          visited[edge] = true;
          stack.push(edge);
        }
      });
    }
    return results;
  }

  breadthFirst(start) {
    let results = [];
    let queue = [start];
    let visited = {};
    visited[start] = true;
    let vertex, edges;
    while (queue.length) {
      vertex = queue.shift();
      results.push(vertex);
      edges = this.adjacencyList[vertex];
      edges.forEach(edge => {
        if (visited[edge] === undefined) {
          queue.push(edge);
          visited[edge] = true;
        }
      })
    }
    return results;
  }
}
 
let g = new Graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
g.depthFirstRecursive("A")

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
