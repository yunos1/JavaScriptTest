
//私有

import Type from '../type'

let state = {
    count:0
}

let getters ={
    count(state){
        return state.count
    }
}

let actions = {
    increment({commit,state}){
        commit(Type.INCREMENT)
    },
    // 方法名也能改

    [Type.DECREMENT]({commit,state}){
        // 填写判断
        if(state.count > 3){
            commit("decrement")
        }
    }
}

let mutations = {
    [Type.INCREMENT](state){
        state.count++
    },
    decrement(state){
        state.count--
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}