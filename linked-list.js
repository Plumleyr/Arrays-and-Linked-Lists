/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val)
    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
    } else{
      this.tail.next = newNode;
      this.tail = newNode;
      this.length += 1;
    }

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val)
    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
    }else{
      newNode.next = this.head;
      this.head = newNode;
      this.length += 1;
    }
  }

  /** pop(): return & remove last item. */
  pop() {
    let currentNode = this.head;
    let newTail = currentNode;

    while(currentNode.next){
      newTail = currentNode;
      currentNode = currentNode.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;

    if(this.length === 0){
      this.head = null;
      this.tail = null;
    }

    return currentNode.val
  }

  /** shift(): return & remove first item. */

  shift() {
    let currentNode = this.head;
    let newHead = this.head.next;
    if(this.length === 1){
      this.head = null;
      this.tail = null;
      this.length--;
    }else{
      this.head = newHead;
      this.length--;
    }
    return currentNode.val
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let count = 0;
    let currentNode = this.head;
    while(count !== idx){
      currentNode = currentNode.next;
      count++;
    }
      return currentNode.val;
    }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let count = 0;
    let currentNode = this.head;
    while(count !== idx){
      currentNode = currentNode.next;
      count++;
    }
    currentNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */
  insertAt(idx, val) {
    let count = 0;
    let beforeNode;
    let newNode = new Node(val);
    let currentNode = this.head;

    while(count !== idx){
      beforeNode = currentNode;
      currentNode = currentNode.next;
      count++;
    }
      if(idx === 0){
        newNode.next = this.head
        this.head = newNode;
        if(!this.tail){
          this.tail = newNode
        }
      }
      else if(idx === this.length){
        beforeNode.next = newNode;
        this.tail = newNode
      }else{
        beforeNode.next = newNode;
        newNode.next = currentNode
      }
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let beforeNode;
    let currentNode = this.head;

    if(idx === 0){
      this.head = currentNode.next
      if(this.length === 1){
        this.tail = null;
      }
    } else {
      for (let i = 0; i < idx; i++) {
        beforeNode = currentNode;
        currentNode = currentNode.next;
      }
      beforeNode.next = currentNode.next;
      if(idx === this.length - 1){
        this.tail = beforeNode;
      }
    }
    this.length--;
    return currentNode.val
  }

  /** average(): return an average of all values in the list */

  average() {
    let sum = 0;
    let currentNode = this.head;
    if(this.length === 0){
      return 0
    }else{
      for(let i =0; i < this.length; i++){
      sum += currentNode.val;
      currentNode = currentNode.next;
      }
    }
    return (sum / this.length)
  }
}

module.exports = LinkedList;
