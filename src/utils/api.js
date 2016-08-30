'use strict'
import fetch from 'isomorphic-fetch'

const domain = 'https://api.github.com/'
const apis = {
  search: {
    user: domain + 'search/users'
  }
}

export default {
  getUserList (q, page = 1) {
    return fetch(`${apis.search.user}?q=${q}&page=${page}`)
  }
}
