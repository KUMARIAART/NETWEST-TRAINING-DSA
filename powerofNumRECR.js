function powerOFNum(x,y){
    if(y===0){
        return 1;
    }
    else{
        return x*powerOFNum(x,y-1)
    }
}
console.log(powerOFNum(2,4));