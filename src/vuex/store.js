'use strict'
import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

const state = {
  filter: {
    location: '',
    language: ''
  },
  showFilter: true,
  userList: {
    count: 0,
    users: []
  }
}

const mutations = {
  SET_LOCATION (state, location) {
    state.filter.location = location
  },
  SET_LANGUAGE (state, language) {
    state.filter.language = language
  },
  SHOW_FILTER (state) {
    state.showFilter = true
  },
  HIDE_FILTER (state) {
    state.showFilter = false
  },
  SET_USER_LIST (state, val) {
    state.userList.count = val.total_count
    state.userList.users = val.items
  }
}

export default new Vuex.Store({
  state,
  mutations
})
