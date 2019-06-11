
// 公有


let actions = {
    incrementAsync({commit,state}){
        let p = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve()
            },5000)
        })
        p.then(()=>{
            commit("increment")
        })
        .catch(err=>console.log(err))
    }
}