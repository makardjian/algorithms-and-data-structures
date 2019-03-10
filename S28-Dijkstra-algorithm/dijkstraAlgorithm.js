
// Naive priority queue
class PriorityQue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val: val, priority: priority});
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}


class WeightedGraph {
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

  addEdge(v1, v2, weight) {
    let vertices = this.adjacencyList;
    if (vertices.hasOwnProperty(v1) && vertices.hasOwnProperty(v2)) {
      let v1Edges = vertices[v1];
      let v2Edges = vertices[v2];
      for (let i = 0; i < v1Edges.length; i += 1) {
        if (v1Edges[i].node === v2) return false;
      }
      v1Edges.push({node: v2, weight: weight});
      v2Edges.push({node: v1, weight: weight});
      return true;
    }
    return false;
  }

  shortestPath(start, end) {
    let vertices = Object.keys(this.adjacencyList);
    let distances = {};
    let nodes = new PriorityQue();
    let previous = {};
    let smallest;
    
    //initialize the distances object, queue, and previous object
    for (let i = 0; i < vertices.length; i += 1) {
      let current = vertices[i];
      if (current === start)  {
        distances[current] = 0;
        nodes.enqueue(current, 0)
      } else {
        distances[current] = Infinity;
        nodes.enqueue(current, Infinity);
      }
      previous[current] = null;
    }
    
    // as long as there is something to visit:
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === end) {
        // WE ARE DONE, NEEED TO BUILD PATH TO RETURN
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let index in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][index];
          let nextNeighbor = nextNode.node;

          // calculate new distance to neighboring node:
          let candidate = distances[smallest] + nextNode.weight;
          //compare the value of candidate with whatever we have stored as the
            //shortest distance from start to nextNode
          if (candidate < distances[nextNeighbor]) {
            //update new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            //update how we got to the neighbor
            previous[nextNeighbor] = smallest;
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    let result = [end];
    let finish = end;
    while(finish !== start) {
      result.unshift(previous[finish]);
      finish = previous[finish];
    }
    return result;
  }
}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);

graph.shortestPath("A", "E");
// ["A", "C", "D", "F", "E"]
