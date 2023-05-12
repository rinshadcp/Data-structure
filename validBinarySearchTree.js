class Node{
    constructor(val) {
this.value=val
this.left=null
this.right=null        
    }
}
class BinarySearchTree{
    constructor(){
        this.root=null
    }
    inset(val){
        let newNode =new Node(val)
        if(!this.root){
            this.root=newNode
            return this
        }else{
            let current=this.root
            while(true){
                if(value===current.value)return undefined
                if(value<current.value){
                    if(current.left===null){
                    current.left=newNode
                return this
                    }
                else{
                    current=current.left
                }
            }else if(value>current.value){
                if(current.right===null){
                    
                }

                }

            }
        }

    }
}