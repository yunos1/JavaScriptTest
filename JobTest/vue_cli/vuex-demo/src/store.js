import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count:0
}

const getters = {
    count(state){
        return state.count
    },
    isEven(state){
        return state.count % 2 == 0 ? '偶数':'奇数';
    }
}

const actions = {
    increment({commit}){
        commit("increment")
    },
    decrement({commit}){
        commit("decrement")
    },
    incrementAsync({commit}){
        let p = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve()
            },1000)
        })
        p.then(()=>{
            commit("increment")
        }).catch(err=>console.log(err))
    }
}
const mutations = {
    increment(state){
        state.count++
    },
    decrement(state){
        state.count--
    }
}

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})

export default store;