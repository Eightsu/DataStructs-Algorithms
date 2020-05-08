class Queue {
  constructor () {
    this.start = null;
    this.end = null;
    this.size = 0;
  }

  enqueue (val) {
    const newNode = new Node(val);
    if (!this.start) {
      this.start = newNode;
      this.end = newNode;
    } else {
      this.end.next = newNode;
      this.end = newNode;
    }
    this.size++;
    return this.size;
  }

  dequeue () {
    if (!this.start) return null;
    const node = this.start;
    if (this.start === this.end) {
      this.end = null;
    }
    this.start = this.start.next;
    this.size--;
    return node;
  }
}
