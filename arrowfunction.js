
let prime = [1,2,3,4,5,6,7,8,9,10,11,12,13];
let prime1 = [];
prime.map((val)=> {
    let sum = 0;
    if(val===1)
     sum = 1;
    for(let j=2;j<val;j++)
    {
          if(val%j ===0)
          {
              sum=sum+1;
          }
    }
      if (sum == 0){
          prime1.push(val)
      }


    })
    console.log(prime1)



let odd = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let odd1 = odd.filter((val)=>val%2!==0)
console.log(odd1)





let titlecase = ["iam yuvARaj","this iS mY world"];

let title = titlecase.map((val)=>{
    let d = val.toLowerCase().split(" ")
    let f = [];
     d.map((ele)=>{
      let e = ele.charAt(0).toUpperCase()+ele.slice(1)
    
     f.push(e)
     
     })

     console.log(f.join(" "))
})



let palaindrome = ["madam","dad","pic","daddy","mom",123,1221,1331,435,89,121,555];
let palindrome1 = [];

 palaindrome.map((val)=>{
   let rev =  val.toString().split("").reverse().join("");
   if(val == rev) {
    palindrome1.push(val)
  }
})



console.log(palindrome1);



let sum = [1,2,3,4,5,6,7,8,9,10];
let sum1 = sum.reduce(((a,b)=>a=a+b))
console.log(sum1)
