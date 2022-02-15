let arr = ["madam","dad","hi","hello","dood",121,1221,234,567];
let arr1 = [];

for (i=0;i<arr.length;i++){
    let rev = arr[i].toString().split("").reverse().join("");
    if(arr[i] == rev)
    arr1.push(arr[i])
    
    
}console.log(arr1)
