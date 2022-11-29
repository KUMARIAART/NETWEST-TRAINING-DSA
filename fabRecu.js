// function fabonacci(a){
//     if(a<=1){
//         return a;
//     }
//     else{
//         return fabonacci(a-1)+fabonacci(a-2);
//     }
// }
// console.log(fabonacci(10));


function fabonacci(a){
    if(a==0){
        return 0;
    }
    if(a==1){
        return 1;
    }
    else{
        return fabonacci(a-1)+fabonacci(a-2);
    }
}
console.log(fabonacci(10));


