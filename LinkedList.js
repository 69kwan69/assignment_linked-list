import Node from './Node.js';

export default class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
    this.tail = null;
  }

  append(value) {
    const node = new Node(value);
    if (this.tail) {
      const temp = this.tail;
      temp.nextNode = node;
    } else {
      this.head = node;
    }
    this.tail = node;
    this.size += 1;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.head) {
      const temp = this.head;
      node.nextNode = temp;
    } else {
      this.tail = node;
    }
    this.head = node;
    this.size += 1;
  }

  at(index) {
    if (index >= this.size) return null;

    let cursor = this.head;
    while (index > 0) {
      cursor = cursor.nextNode;
      index--;
    }
    return cursor;
  }

  pop() {
    if (this.size === 0) return;
    else if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const cursor = this.at(this.size - 2);
      this.tail = cursor;
      cursor.nextNode = null;
    }
    this.size -= 1;
  }

  find(value) {
    let cursor = this.head;
    for (let i = 0; i < this.size; i++) {
      if (cursor.value === value) return i;
      cursor = cursor.nextNode;
    }
    return null;
  }

  contains(value) {
    const result = this.find(value);
    return isNaN(result);
  }

  toString() {
    let string = '';
    if (this.size !== 0) {
      let i = this.size;
      let cursor = this.head;
      while (i > 0) {
        string += `( ${cursor.value} ) -> `;
        cursor = cursor.nextNode;
        i--;
      }
    }

    return string + 'null';
  }

  // Extra credit
  insertAt(value, index) {
    if (index < 0 || this.size < index) return;
    else if (index === 0) this.prepend(value);
    else if (index === this.size) this.append(value);
    else {
      let cursor = this.head;
      for (let i = 0; i < index - 1; i++) {
        cursor = cursor.nextNode;
      }
      const left = cursor;
      const middle = new Node(value);
      const right = left.nextNode;

      left.nextNode = middle;
      middle.nextNode = right;
      this.size += 1;
    }
  }

  removeAt(index) {
    if (index < 0 || this.size <= index) return;
    else if (index === this.size - 1) this.pop();
    else if (index === 0) {
      const middle = this.head;
      const right = middle.nextNode;

      this.head = right;
      this.size -= 1;
    } else {
      let cursor = this.head;
      for (let i = 0; i < index - 1; i++) {
        cursor = cursor.nextNode;
      }
      const left = cursor;
      const middle = left.nextNode;
      const right = middle.nextNode;

      left.nextNode = right;
      this.size -= 1;
    }
  }
}
