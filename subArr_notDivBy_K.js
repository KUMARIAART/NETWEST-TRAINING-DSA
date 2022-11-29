let arr=[2,3,4,6];
let array=[];
let k=3;
let sum=0;
for(var i=0;i<arr.length;i++){
    for(var j=i;j<arr.length;j++){
        array.push(arr.slice(i,j+1))
    }
}
let new_arr=[]
let max=0
let res;
for(i of array){
    let c=0
    for(j of i){
        c+=j
    }
    if(c%k!=0 && i.length>max){
        max=i.length
        new_arr=i
    }
}
console.log(new_arr);


