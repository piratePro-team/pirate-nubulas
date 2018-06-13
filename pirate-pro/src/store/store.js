import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import getters from './getter'
import mutations from './mutation'
import state from './rootState'



Vue.use(Vuex)



export default new Vuex.Store({
	actions,
	getters,
	mutations,
  	state,
})