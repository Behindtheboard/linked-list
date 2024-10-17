// import { Node } from "./node";

class Node {
  constructor() {
    this.value = null;
    this.next = null;
  }
}

function linkedList() {
  let head = null;
  let size = 0;
  let current;

  const append = function (value) {
    const newNode = new Node();
    newNode.value = value;
    if (head === null) {
      head = newNode;
    } else {
      current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    size++;
  };

  const prepend = function (value) {
    const newNode = new Node();
    newNode.value = value;
    if (head === null) {
      head = newNode;
    } else {
      current = head;
      head = newNode;
      head.next = current;
    }
    size++;
  };

  function getSize() {
    return size;
  }

  function getHead() {
    return head;
  }

  function getTail() {
    current = head;
    while (current.next) {
      current = current.next;
    }
    return current;
  }

  function at(index) {
    if (index > size) {
      return null;
    } else {
      current = head;
      for (i = 1; i < index; i++) {
        current = current.next;
      }
      return current;
    }
  }

  function pop() {
    current = head;
    for (i = 2; i < size; i++) {
      current = current.next;
    }
    current.next = null;
    size--;
  }

  function contains(value) {
    current = head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
  }

  function find(value) {
    current = head;
    let index = 0;
    while (current) {
      index++;
      if (current.value === value) {
        return index;
      }
      current = current.next;
    }
    return false;
  }

  function toString() {
    current = head;
    let string = ``;
    while (current) {
      string = string.concat(`(${current.value}) -> `);
      current = current.next;
      if (current === null) string = string.concat("null");
    }
    return string;
  }

  function insertAt(value, index) {
    const newNode = new Node();
    newNode.value = value;
    if (index > size) {
      return null;
    } else {
      current = head;
      for (i = 2; i < index; i++) {
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
    }
  }

  function removeAt(index) {
    if (index > size) {
      return null;
    } else {
      current = head;
      for (i = 2; i < index; i++) {
        current = current.next;
      }
      let remaining = current.next.next;
      current.next = remaining;
    }
  }

  return {
    append,
    prepend,
    getSize,
    getHead,
    getTail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}

let list = linkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.getSize());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.at(4));
console.log(list.pop());
console.log(list.getSize());
console.log(list.getHead());
console.log(list.contains("dog"));
console.log(list.find("snake"));
console.log(list.toString());
console.log(list.insertAt("monkey", 4));
console.log(list.toString());
console.log(list.removeAt(4))
console.log(list.toString());