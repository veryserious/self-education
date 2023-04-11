/*
 * Stack data structure
 * LIFO (Last In First Out)
 * push, pop, peek, length
 * push: add an element to the top of the stack
 * pop: remove an element from the top of the stack
 * peek: return the top element of the stack
 * length: return the length of the stack
 */

export class Stack<T> {
  private _stack: T[] = [];

  push(item: T): void {
    this._stack.push(item);
  }

  pop(): T | undefined {
    return this._stack.pop();
  }

  peek(): T | undefined {
    return this._stack[this._stack.length - 1];
  }

  get length(): number {
    return this._stack.length;
  }
}

// Usage

// const movieTickets = new Stack<string>();

// movieTickets.push('Avengers');
// movieTickets.push('Star Wars');
// movieTickets.push('The Matrix');
// const currentTicket = movieTickets.pop();
// const lastTicket = movieTickets.peek();
// const ticketCount = movieTickets.length;
