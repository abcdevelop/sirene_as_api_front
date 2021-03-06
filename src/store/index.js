
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import filters from './modules/filters'
import results from './modules/results'
import search from './modules/search'
import welcomeText from './modules/welcomeText'

Vue.use(Vuex)
Vue.use(VueResource)

export default new Vuex.Store({
  modules: {
    filters,
    results,
    search,
    welcomeText
  }
})
