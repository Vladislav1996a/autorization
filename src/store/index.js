import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        user:  null 
    },
    getters:{
        user: state => state.user,
        token: state => state.user.api_token
    },
    mutations:{
        setUser(state, user){
            state.user = user
        },
        outUser(state){
            state.user = null
        }
    },  
    actions:{
        authorization( { commit }, data){
            return new Promise((resolve, reject) => {
                axios.post('/api/common/login', data)
                .then(response => {
                    const user = response.data
                    commit('setUser', user)
                    localStorage.setItem('data', JSON.stringify(user))
                    resolve(response)
                    
                })
                .catch(error =>{
                    reject(error)
                }) 
            })
        },
        logOut({ commit }){
            commit('outUser')
            localStorage.removeItem('data')
        },
    }
})

