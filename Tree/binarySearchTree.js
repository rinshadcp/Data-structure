class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class BinarySearchTree{
    constructor(){
        this.root=null
    }
    insert(value){
        let newNode=new Node(value)
        if(this.root===null){
            this.root=newNode
            return this
        }
        let current= this.root
        while(true){
            if(value===current.value)return undefined
            if(value<current.value){
                if(current.left===null){
                    current.left=newNode
                    return globalThis
                }
                current =current.left
            }else {
                if(current.right===null){
                    current.right=newNode
                    return this
                }
                current=current.right
            }

        }
    }
    find(value){
        if(this.root===null)return false
        let current =this.root
        let found=false
        while(current && !found){
            if(value<current.value){
                current=current.left
            }else if(value>current.value){
                current=current.right
            }else{
                found =true
            }
        }
        if(!found) return undefined
        return current
    }
}

let bst=new BinarySearchTree()
bst.insert(10)
bst.insert(15)
bst.insert(8)
bst.insert(20)
bst.insert(3)
bst.insert(11)
bst.insert(15)
console.log(bst)
console.log( bst.find(20))