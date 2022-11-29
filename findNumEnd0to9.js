let arr=[1,11,23,32,35,40,94,36];
let new_arr=[0,1,2,3,4,5,6,7,8,9];
for(i of new_arr){
    var count=0
    for(j of arr){
        if(j%10==i){
            count+=1
        }
    }
    console.log(i,count);
}
