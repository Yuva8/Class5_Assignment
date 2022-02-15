function sum(arr){
   sum = 0;
   for (let i=0;i<arr.length;i++){
   sum = arr[i]+sum;
   }
   return sum


}
console.log(sum([1,2,3,4,5,6]))
    