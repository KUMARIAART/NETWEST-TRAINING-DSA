
const userInput=require("readline-sync");
let num=userInput.questionInt("enter any number:-")
for(var i=1;i<=num;i++){
    if(2**i>16){
        console.log(num,"NO");
        break;
    }
    else if(2**i==num){
        console.log(num,"YES");
        break;
    }
}
