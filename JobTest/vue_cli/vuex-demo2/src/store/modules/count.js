
//私有

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
        commit("increment")
    },
    // 方法名也能改

    decrement({commit,state}){
        // 填写判断
        if(state.count > 3){
            commit("decrement")
        }
    }
}

let mutations = {
    increment(state){
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