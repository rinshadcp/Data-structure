class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    if (this.items.length === 0) {
      return null;
    }
    return this.items.shift();
  }
  peek(){
    if(this.items.length===0){
        return null
    }
    return this.items[0] //first element
  }
  isEmpty(){
    return this.items.length===0
  }
  size(){
    return this.items.length
  }
  print(){
    console.log(this.items)
  }
}
const queue= new Queue()
queue.enqueue(3)
queue.enqueue(2)
queue.enqueue(1)
queue.enqueue(76)
queue.enqueue(9)
queue.enqueue(5)
queue.enqueue(-7)
queue.enqueue(100)
let peek= queue.peek()
console.log(peek)
queue.print()
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.print()