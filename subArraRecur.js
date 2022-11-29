let arr=[1,2,3,4,5];
function subArray(arr,st,en){
    if(arr.length===en){
        return;
    }
    else if(st>en){
        subArray(arr,0,en+1);
    }
    else{
        console.log(arr.slice(st,en+1));
        return subArray(arr,st+1,en)
    }
}
subArray(arr,0,0);
