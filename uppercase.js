let arr = ["hEllo worlD","tHis is my World"];
for(let i=0;i<arr.length;i++){
  let c = arr[i].toLowerCase().split(" ");
  //console.log(c)
  let d =[];
  for(let j=0;j<c.length;j++){
    let e = c[j].charAt(0).toUpperCase()+c[j].slice(1);
    d.push(e)
  }
  let f = d.join(" ")


console.log(f)
}
