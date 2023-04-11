/*
 * Queue Data Structure
 * FIFO (First In First Out)
 * enqueue, dequeue, peek, length
 * The first element added to the queue will be the first one to be removed.
 * The last element added to the queue will be the last one to be removed.
 * enqueue: add an element to the end of the queue
 * dequeue: remove an element from the beginning of the queue
 * peek: return the first element of the queue
 * length: return the length of the queue
 *
 */

export class Queue<T> {
  private _queue: T[] = [];

  enqueue(item: T): void {
    this._queue.push(item);
  }

  dequeue(): T | undefined {
    return this._queue.shift();
  }

  peek(): T | undefined {
    return this._queue[0];
  }

  get length(): number {
    return this._queue.length;
  }
}
