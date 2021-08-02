let arr = [1, 3, 5, 7, 9];

class Node {
  constructor(data, next = null) {
    this.head = data;
    this.next = next;
  }
}

export class LinkedList {
  constructor(data) {
    this.head = null;
    this.size = 0;
  }

  addElement(element) {
    this.head = new Node(element, this.head);
    this.size++;
  }

  addElementLast(element) {
    let node = new Node(element);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.size++;
    }
  }

  insertAtIndex(data, index) {
    if (index > 0 && index > this.size) {
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    } else {
      let node = new Node(data);
      let current = this.head,
        previous;
      let count = 0;
      while (count < index) {
        previous = current;
        count++;
        current = current.next;
      }

      node.next = current;
      previous.next = node;
      this.size++;
    }
  }

  getMiddleOfLinkedList() {
    let current = this.head;
    let index = Math.ceil(this.size / 2);
    let count = 1;
    let result;

    while (current) {
      if (index === count) {
        result = current.head;
      }
      current = current.next;
      count++;
    }
    return result;
  }

  getElementAtIndex(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log('Index Of element', current.head);
      }
      count++;
      current = current.next;
    }
    return null;
  }

  reverseLinkedList() {
    let current = this.head,
      temp,
      previous;

    while (current) {
      temp = current.next;
      current.next = previous;
      previous = current;
      current = temp;
    }
    return previous;
  }
}
