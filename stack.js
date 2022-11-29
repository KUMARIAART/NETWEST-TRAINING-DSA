class Stack{
    constructor(){
        this.arr=[]
    }
    adding(element){
        return this.arr.push(element)
    }
    removing(){
       return !this.isEmpty?"stack is empaty" :this.arr.pop()
    }
    top(){
        return !this.isEmpty?"stack is empaty":this.arr[this.arr.length-1]
    }
    isEmpty(){
        return this.arr.length==0
        
    }
}
var stack = new Stack
stack.adding(10)
stack.adding(20)
console.log(stack.top())
console.log(stack)