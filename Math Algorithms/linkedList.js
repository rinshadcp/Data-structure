class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  addNode(value) {
    let node = new Node(value);

    if (this.head === null) {
      this.head = node;
      this.size++;
    } else {
      let curr = this.head;
      while (curr.next != null) {
        curr = curr.next;
      }
      curr.next = node;
      this.size++;
    }
  }

  print() {
    let curr = this.head;
    while (curr != null) {
      console.log(curr.value);
      curr = curr.next;
    }
  }
}

let a = new LinkedList();
a.addNode(2);
a.addNode(3);
a.addNode(56);
a.addNode(75);
a.addNode(100);
a.print();

console.log(a);
