import LinkedListNode from "./LinkedListNode";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new LinkedListNode(value);

    //if there is no head, the list is empty and the new node will be head and tail
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    //if there is a head tell the current tail that there is a new node and then set the new tail;
    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  toArray() {
    const nodeValues = [];

    let currentNode = this.head;

    while (currentNode) {
      nodeValues.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return nodeValues;
  }
}
