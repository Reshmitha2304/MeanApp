var add = (a,b) =>{
    return new Promise((resolve,reject)=>{
        if(a!=b)
            resolve(a+b)
        else
            reject("error occured")
    })
}

add(30,30).then((res)=>{
    console.log(res);
     return add(40,40)
}).then((res1)=>{
    console.log(res1);
}).catch((errmsg)=>{
    console.log(errmsg)
})

// var pro=new Promise((resolve,reject)=>{
//     if(false){
//         resolve("in resolve block")
//     }
//     else{
//         reject("in reject block")
//     }
// })

// pro.then((msg)=>{
//     console.log(msg);
//     // pro.then((msg1)=>{
//     //     console.log("in second promise"+msg1);
//     // },(errm)=>{
//     //     console.log("sec err"+errm);
//     // })
// },(errmsg)=>{
//     console.log(errmsg);
// })