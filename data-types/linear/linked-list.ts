/*
 * Linked List Data Type
 * append, prepend
 * A linked list is a data structure that contains a head, tail, and length property.
 * Linked lists consist of nodes, and each node has a value and a pointer to another node or null.
 * The head is the first node in the list, the tail is the last node in the list, and the length is the number of nodes in the list.
 * Linked lists are a great alternative to arrays when insertion and deletion at the beginning are frequently required.
 */

// Implementation of a singly linked list
// Singly linked lists link each node to the next node in the list.
// The last node in the list points to null.

export class Node<T> {
  constructor(public value: T, public next: Node<T> | null = null) {}
}

export class LinkedList<T> {
  head: Node<T> | null = null;
  // compare function to compare two nodes
  comparator: ((a: T, b: T) => boolean) | undefined;

  constructor(comparator?: (a: T, b: T) => boolean) {
    this.comparator = comparator;
  }

  // Add a node to the end of the list
  append(value: T): void {
    const node = new Node(value);

    // If the list is empty, set the head to the new node
    if (!this.head) {
      this.head = node;
      return;
    }

    // Otherwise, traverse the list to the end and add the new node
    // Limitation: this is an O(n) operation
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  // Add a node to the beginning of the list
  prepend(value: T): void {
    const node = new Node(value, this.head);
    this.head = node;
  }
}
