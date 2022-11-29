function str(array,final){
    if(array[0]==="aarti"){
        return "";
    }
    else{
        final.push(array[0])
        return str(array.slice(1,array.length),final)
    }
}
final=[]
console.log(str(["sheetal","sandy","aarti","pooja"],final));
console.log(final)
