class Stack{
    constructor(){
        this.items=[]
    }
    push(item){
        this.items.push(item)

    }
    pop(){
        if(this.items.length===0){
            return null
        }
         return this.items.pop()
    }
    peek(){
        if(this.items.length===0){
            return null
        }
        return this.items[this.items.length-1] //top element
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

const stack =new Stack()
stack.push(3)
stack.push(8)
stack.push(5)
stack.push(1)
stack.push(7)
stack.push(10)
console.log( stack.peek())
stack.pop()
stack.print()