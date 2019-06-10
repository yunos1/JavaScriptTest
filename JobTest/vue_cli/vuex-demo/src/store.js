
//状态管理器

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 定义状态属性
var state = {
    count:0
}

// 定义getters  ---读取
var getters = {
    count(state){
        return state.count;
    }
}

// 定义actions行为
var actions = {
    // 状态  添加
    increatement({commit,state}){
        // TODO
        commit("increatement")
    },
    decreatement({commit,state}){
        commit("decreatement")
    }
}

// 定义mutation
var mutations = {
    increatement(state){
        state.count++;
    },
    decreatement(state){
        state.count--;
    }
}

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})

export default store;
