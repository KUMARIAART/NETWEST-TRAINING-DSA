const arr=[1,2,3,5,6,7,8,9,10];
let last=arr[arr.length-1]
let num=last*(last+1)/2
let sum=0;
for(i of arr){
    sum+=i
}
console.log("missing number is :-",num-sum);