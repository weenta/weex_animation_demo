import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        num:2,
        routerHistory:[]
    },
    mutations: {
        setRouterHistory(state,payload){
            state.routerHistory.push(payload)
        },
        
        removeLastPath(state){
            state.routerHistory.pop()
        }
    }
})

export default store