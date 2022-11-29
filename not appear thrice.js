let list=[1,3,1,3,1,2,3];
uniques=[]
for(var i of list){
   if(!uniques.includes(i)){
       uniques.push(i)
   }
}
for(var j of uniques){
   count=0
   for(var k of list){
       if (j === k){
           count+=1
       }
   }
   if(count<3){
    console.log(j);
   }
}