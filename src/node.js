class Node {
  constructor (val, single = true) {
    this.val = val;
    this.next = null;
    if (!single) {
      this.previous = null;
    }
  }
}

class Node {
  constructor (data, priority) {
    this.data = data;
    this.priority = priority;
  }
}


export { Node };
