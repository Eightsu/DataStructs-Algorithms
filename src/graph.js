// undirected graph.

class Graph {
  constructor () {
    this.adjacencyList = {};
  }

  addVertex (v) {
    if (!this.adjacencyList[v]) this.adjacencyList[v] = [];
  }

  addEdge (v1, v2) {
    const connection = this.adjacencyList;
    if (connection[v1] && connection[v2]) {
      connection[v1].push(v2);
      connection[v2].push(v1);
      return this;
    }
    return false;
  }

  removeEdge (v1, v2) {
    const connection = this.adjacencyList;
    if (connection[v1] && connection[v2]) {
      connection[v1] = connection[v1].filter((v) => v !== v2);
      connection[v2] = connection[v2].filter((v) => v !== v1);
      return this;
    }
    return false;
  }

  removeVertex (v) {
    const connection = this.adjacencyList;
    const { length } = connection[v];

    if (connection[v]) {
      for (let i = 0; i < length; i++) {
        this.removeEdge(v, connection[v][0]);
      }
      delete this.adjacencyList[v];
    }
    return this;
  }

  // accept starting node.
  DFSRecur (start) {
    // store
    const results = [];
    const visited = {};
    const list = this.adjacencyList;


    (function dfs (vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      results.push(vertex);
      list[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          return dfs(neighbour);
        }
      });
    }(start));

    return results;
  }

  DFSIter (start) {
    const results = [];
    const s = [start];
    const visited = {};
    let vertex;

    visited[start] = true;

    while (s.length) {
      vertex = s.pop();
      results.push(vertex);

      this.adjacencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          s.push(neighbour);
        }
      });
    }
    return results;
  }

  BFSIter (start) {
  // add with push, remove with shift
    const q = [start];
    const results = [];
    const visited = {};
    let vertex;

    visited[start] = true;

    while (q.length) {
      vertex = q.shift();
      results.push(vertex);
      this.adjacencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          q.push(neighbour);
        }
      });
    }
    return results;
  }
}

export { Graph };
