import { Node } from './node.js';

class SLL {
  constructor () {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push (val) {
    if (!val) return null;
    const newNode = new Node(val);
    // if there's no head to the list
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // if there is a head, then append and assign new node to tail
      this.tail.next = newNode;
      this.tail = newNode;
    }
    // increment length of the list, and return
    this.length += 1;
    return this;
  }

  pop () {
    // if there's no head just return undefined
    if (!this.head) return undefined;

    // set the current & pre to head
    let current = this.head;
    let pre = current;

    // while the current node's next isn't null
    while (current.next) {
      // set previous node to current
      pre = current;
      // set the current node, to the next
      current = current.next;
    }

    // once you find a node which points to null
    // set the tail to the previous node, and it's next property to null.
    // cutting off the previous node from the list.
    this.tail = pre;
    this.tail.next = null;

    // decrememnt the length
    this.length -= 1;

    // if the head node is popped off, and the length is 0, assign both head and tail to null.
    // this list is now empty.
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    // return removed node
    return current;
  }

  shift () {
    if (!this.head) return null;
    const { head } = this;
    this.head = head.next;
    this.length -= 1;
    // this.length === 0 ? this.tail = null : null;
    if (this.length === 0) {
      this.tail = null;
    }
    return head;
  }

  unshift (val) {
    if (!val) return null;
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get (idx) {
    if (idx < 0 || idx >= this.length) {
      return -1;
    }
    let count = 0;
    let node = this.head;
    while (count !== idx) {
      node = node.next;
      count++;
    }
    return node;
  }

  set (idx, val) {
    // if(idx < 0 || idx >= this.length) {
    // return false;
    // }
    const node = this.get(idx);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert (idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return !!this.push(val);
    if (idx === 0) return !!this.unshift(val);

    {
      const node = new Node(val);
      const pre = this.get(idx - 1);
      const next = this.get(idx + 1);

      pre.next = node;
      node.next = next;
      this.length++;
    }
    return true;
  }

  remove (idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === this.length - 1) return this.pop();
    if (idx === 0) return this.shift();

    const pre = this.get(idx - 1);
    const node = pre.next;
    pre.next = node.next;
    this.length--;

    return node;
  }

  rev () {
    let node = this.head;
    let next = null;
    let pre = null;

    this.head = this.tail;
    this.tail = node;


    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = pre;

      pre = node;
      node = next;
    }
    return this;
  }
}


export { SLL };
