class nutrision{
    constructor(){
        this.fruits="apple"
    }
}
class badDait extends nutrision{
    constructor(food1,food2){
        super()
        this.food1=food1
        this.food2=food2
    }
}
var changeDiet=new badDait("junkfood","softdrink")
console.log(changeDiet)