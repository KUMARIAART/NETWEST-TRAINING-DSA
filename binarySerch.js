function binarySerch(arr,start,end,number){
    if(start<=end){
        var mid=Math.floor(start+(end-start)/2)
        if(arr[mid]==number){
            return mid
        }
        else if(arr[mid]>number){
            return binarySerch(arr,start,mid-1,number)
        }
        else if(arr[mid]<number){
            return binarySerch (arr,mid+1,end,number)
        }
    }
    else{
        return "element is not in a arr";
    }
}
var arr=[1,2,3,4,5,6,7,8,9,10];
var number=7;
console.log(binarySerch(arr,0,arr.length-1,number))