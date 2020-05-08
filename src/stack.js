import { Node } from './node.js';

class Stack {
  constructor () {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  pop () {
    if (!this.first) return null;
    const { first } = this;
    this.first = first.next;
    this.size--;
    this.size === 0 ? this.last = null : null;
    return first.val;
  }

  push (val) {
    if (!val) return null;
    const newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }
}
