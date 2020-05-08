/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

import { PriorityQueue } from './priorityQ.js';

class WeightedGraph {
  constructor () {
    this.adjacencyList = {};
  }

  addVertex (vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge (v1, v2, w) {
    this.adjacencyList[v1].push({ node: v2, weight: w });
    this.adjacencyList[v2].push({ node: v1, weight: w });
  }

  dijkstra (start, end) {
    const nodes = new PriorityQueue();
    const distances = {};
    const history = {};
    const path = [];
    let smallest;

    for (const vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enQueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enQueue(vertex, Infinity);
      }
      history[vertex] = null;
    }
    while (nodes.values.length) {
      smallest = nodes.deQueue().val;
      if (smallest === end) {
        // Build path
        while (history[smallest]) {
          path.push(smallest);
          smallest = history[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (const neighbour in this.adjacencyList[smallest]) {
          const next = this.adjacencyList[smallest][neighbour];

          const c = distances[smallest] + next.weight;
          if (c < distances[next.node]) {
            // update distance to
            distances[next.node] = c;
            // update how you get to next neighbour
            history[next.node] = smallest;
            nodes.enQueue(next.node, c);
          }
        }
      }
    }
    return path.concat(start).reverse();
  }
}


export { WeightedGraph };
