import { Node } from './node.js';

class DLL {
  constructor () {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push (val) {
    if (!val) return null;

    const newNode = new Node(val, false);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop () {
    if (!this.tail) return null;
    const store = this.tail;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      // set new tail to previous node
      this.tail = store.previous;

      // sever connections to store
      this.tail.next = null;
      store.previous = null;
    }
    this.length--;
    return store;
  }

  shift () {
    if (!this.head) return null;
    const store = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = store.next;
      this.head.previous = null;
      store.next = null;
    }

    this.length--;
    return store;
  }

  unshift (val) {
    if (!val) return null;
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const store = this.head;
      this.head = newNode;

      // reconnect
      this.head.next = store;
      store.previous = newNode;
    }
    this.length++;

    return this;
  }

  get (idx) {
    if (idx < 0 || idx >= this.length) return null;
    let count;
    let current;
    if (idx <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== idx) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;

      while (count !== idx) {
        current = current.previous;
        count--;
      }
    }
    return current;
  }

  set (idx, val) {
    const node = this.get(idx);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert (idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);
    {
      const node = new Node(val);
      const pre = this.get(idx - 1);
      const { next } = pre;

      pre.next = node;
      node.previous = pre;
      node.next = next;
      next.previous = node;
    }
    this.length++;
    return true;
  }

  remove (idx) {
    if (idx < 0 || idx > this.length) return undefined;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    const remove = this.get(idx);
    const pre = this.get(idx - 1);
    const next = this.get(idx + 1);

    remove.next = null;
    remove.previous = null;
    pre.next = next;
    next.previous = pre;

    this.length--;
    return remove;
  }
}

export { DLL };
