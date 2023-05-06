import Vue from "vue"
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		globalHeight: 0,
		userInfo: uni.getStorageSync('userInfo') ? uni.getStorageSync('userInfo') : {}
	},
	mutations: {
		setGlobalHeight(state, height) {
			state.globalHeight = height
		},
		LOGIN(state, userInfo) {
			uni.setStorageSync('userInfo', userInfo)
			state.userInfo = userInfo
		},
		LOGOUT(state) {
			uni.clearStorageSync()
			state.userInfo = {}
		}

	},
	actions: {
		login(context, userInfo) {
			context.commit('LOGIN', userInfo)
		},
		logout(context) {
			context.commit('LOGOUT')
		}
	},
	getters: {}
})

export default store
