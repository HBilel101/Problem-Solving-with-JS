const arr = [1,2,3] ;
const find = (arr , i , element )=> {
found = false ;
for(let j =i+1 ;j<arr.length;j++){
    if(arr[j]===element){
        found = true ;
        break ;
    }
}

return found ;
}
const solution2 = (arr,target)=>{
let result = [] ;
arr.forEach((element,index) => {
    debugger ;
    let number2 = target - element ;
    if(find(arr,index,number2)){
        result.push(element,number2);
    }
});
return result ;
}
console.log(solution2(arr,4));
