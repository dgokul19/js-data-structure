import { LinkedList } from './LinkedList/list';
import { reverseString, removeRepeatedCharacter } from './String/string';

// Executing Linked List logics

let list = new LinkedList();
list.addElement(1);
list.addElement(2);
list.addElement(3);
list.addElement(4);
list.addElement(5);
// console.log('reversing a linked list', list.reverseLinkedList());

// Executing a String logics
// Reverse a given string
// console.log(reverseString('Gokulan'));

// Recursively remove all adjacent duplicates

console.log(removeRepeatedCharacter('geeksforgeek'));

console.log(removeRepeatedCharacter('acaaabbbacdddd'));
