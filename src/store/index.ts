import { createStore, createLogger } from 'vuex'
import modules from './modules'
import config from '../config'

const store = createStore({
	modules,
	state: {},
	mutations: {},
	actions: {},
	strict: config.isDev,
	plugins: config.isDev ? [createLogger()] : []
})

export default store
