

var student = [
    {
        name:"xxx",
        mark : 20 ,
        status:"fail"
    },
    {
        name:"yyy",
        mark : 100, 
        status:"pass"
    },
    {
        name:"zzz",
        mark : 90 ,
        status :"pass"
    }
]

var res = student.filter(ele=>ele.status==="pass").reduce((mar,el) => mar = mar+(el.mark),0)


console.log(res)