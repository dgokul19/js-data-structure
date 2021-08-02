import { LinkedList } from './LinkedList/list';

// Executing Linked List

let list = new LinkedList();
list.addElement(1);
list.addElement(2);
list.addElement(3);
list.addElement(4);
list.addElement(5);

// console.log(a.getMiddleOfLinkedList());
console.log('reversing a linked list', list.reverseLinkedList());
