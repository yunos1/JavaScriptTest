
// 公有
import Type from './type'

let actions = {
    incrementAsync({commit,state}){
        let p = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve()
            },5000)
        })
        p.then(()=>{
            commit(Type.INCREMENT)
        })
        .catch(err=>console.log(err))
    }
}