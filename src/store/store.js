import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            account: "",
            name: "",
            path: "",
            sex: "",
            age: "",
            birthday: ""
        }
    },
    mutations: {
        updateUser(state, user) {
            state.user = user;
        }
    }
})