'use strict'
import api from '../utils/api'

export const setLocation = ({dispatch}, location) => {
  dispatch('SET_LOCATION', location)
}

export const setLanguage = ({dispatch}, language) => {
  dispatch('SET_LANGUAGE', language)
}

export const toggleFilter = ({dispatch}, status) => {
  status ? dispatch('SHOW_FILTER') : dispatch('HIDE_FILTER')
}

export const setUserList = ({dispatch}, q, page) => {
  api.getUserList(q, page)
  .then(res => res.json())
  .then(val => dispatch('SET_USER_LIST', val))
}
