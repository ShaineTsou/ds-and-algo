/* 
Implement Queue Using Stacks (https://leetcode.com/problems/implement-queue-using-stacks/)
- Implemnet a first-in-first-out (FIFO) queue using only 2 stacks.
- The implemented queue should support all the functions of a normal queue:
  - empty: Return true is the queue is empty, false otherwise
  - peek: Return the element at the front of the queue
  - push: Push elements to the back of the queue
  - pop: Remove elements from the front of the queue

Constraints:
- Only use the standard operations of a stack
  - push to top
  - pop from top
  - peek from top
  - size
  - empty
*/

// ---- Solution ----
class Stack {
  constructor() {
    this.stack = [];
  }

  empty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.size() - 1];
  }
}

class MyQueue {
  constructor() {
    this.stack = new Stack();
    this.reversedStack = new Stack();
  }

  _transcribe() {
    while (this.stack.size()) {
      this.reversedStack.push(this.stack.pop());
    }
  }

  empty() {
    return this.stack.empty() && this.reversedStack.empty();
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    if (!this.reversedStack.size()) {
      this._transcribe();
    }

    return this.reversedStack.pop();
  }

  peek() {
    if (!this.reversedStack.size()) {
      this._transcribe();
    }

    return this.reversedStack.peek();
  }
}

const myQueue = new MyQueue();
