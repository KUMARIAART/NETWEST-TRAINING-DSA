class Queue{
    constructor(){
        this.arr=[]
    }
    adding(element){
        return this.arr.push(element)
    }
    removing(){
       return !this.isEmpty?"stack is empaty" :this.arr.shift()
    }
    top(){
        return !this.isEmpty?"stack is empaty":this.arr[0]
    }
    isEmpty(){
        return this.arr.length==0
        
    }
}
var queue = new Queue
queue.adding(10)
queue.adding(20)
console.log(queue.top())
console.log(queue)