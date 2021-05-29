export default class LinkedListNode {
  //each node needs to know its own value and the reference to the next one
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
