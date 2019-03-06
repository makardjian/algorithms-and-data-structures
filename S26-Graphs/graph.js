
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  
  addEdge(v1, v2) {
    if (this.adjacencyList.hasOwnProperty(v1) &&
    this.adjacencyList.hasOwnProperty(v2)) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    }
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
    }
  }
}

 