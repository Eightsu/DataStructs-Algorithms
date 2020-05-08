
class PriorityQueue {
  constructor (values = []) {
    this.values = values;
  }

  bubbleUp () {
    // grab the index of newly added item
    let idx = this.values.length - 1;

    // grab the value contained
    const elem = this.values[idx];

    // base case (value is biggest)
    while (idx > 0) {
      // grab parent idx
      const parentIdx = Math.floor((idx - 1) / 2);
      // grab parent val
      const parent = this.values[parentIdx];

      // swap
      if (elem.priority >= parent.priority) break;
      this.values[parentIdx] = elem;
      this.values[idx] = parent;

      // update the idx from old to current
      idx = parentIdx;
    }
  }

  bubbleDown () {
    let idx = 0;
    const { length } = this.values;
    const elem = this.values[0];

    while (true) {
      const leftNodeIdx = idx * 2 + 1;
      const rightNodeIdx = idx * 2 + 2;
      let swap = null;
      let leftNode;
      let rightNode;

      if (leftNodeIdx < length) {
        leftNode = this.values[leftNodeIdx];
        if (leftNode.priority < elem.priority) swap = leftNodeIdx;
      }
      if (rightNodeIdx < length) {
        rightNode = this.values[rightNodeIdx];
        if (
          (swap === null && rightNode.priority < elem.priority)
          || (swap !== null && rightNode.priority < leftNode.priority)
        ) {
          swap = rightNodeIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = elem;
      idx = swap;
    }
  }

  enQueue (data, priority) {
    const node = new Node(data, priority);
    if (!data || !priority) return null;
    this.values.push(node);
    this.bubbleUp();
  }

  deQueue () {
    // swapped
    const min = this.values[0] ? this.values[0] : null;
    const end = this.values.pop();
    this.values.length > 0 ? (this.values[0] = end) : null;
    this.bubbleDown();
    return min;
  }

}

export { PriorityQueue };
