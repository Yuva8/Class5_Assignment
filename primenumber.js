let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13];
let arr1 = [];
for (let i=0;i<arr.length;i++){
    let sum = 0;
    if(arr[i]===1)
     sum = 1;
    for(let j=2;j<arr[i];j++)
    {
          if(arr[i]%j ===0)
          {
              sum=sum+1;
          }
    }
      if (sum == 0){
          arr1.push(arr[i])
      }


}console.log(arr1)
