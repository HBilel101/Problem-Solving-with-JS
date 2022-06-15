/*  input :[1,2,4,591,392,391,2,5,10,2,1,1,1,20,20] 
 output : [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]  
 
 [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20] 
 1-sort() => [1, 1, 1, 1, 10, 2, 2, 2, 20, 20, 391, 392, 4, 5, 591]
 2- iterate through the array and if the next  element is the same
arrange all the same values aka numbers into an array that will be nested inside the result array and change the value of index to the last item traited so it will be incremented
else if the next element is not the same then push the element to the result array
3- I used debbuger to understand the behaviour of the code use it as well to understand how the algorithm works


I hope you enjoy the solution 
 
 */


let array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20] ;
const solution1 =(arr)=> {
let result =[];
arr.sort((a,b)=>{
    if(a>b) return 1;
    else if (a<b) return -1 ;
    else return 0 ;
}); 
console.log(arr)

for(let i=0;i<arr.length;i++){
    debugger ;
    let array2 =[] ;
    if(arr[i]===arr[i+1]){
        j=i ;
        nb = arr[i];
        while(j<arr.length && arr[j]===nb){
            array2.push(arr[i]);
            j++;
        }
        //result.concat(array2);
        result.push(array2)  ;
        i =j-1//+1//khater heya par defaut fel boucle bech tziid wahed donc nahiih
    }else {
        result.push(arr[i])
        
    }

}
return result ;
}
console.log(solution1(array)) ;
