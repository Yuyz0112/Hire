<template>
  <div class="container flex loader full-height"
  v-if="userList.users.length === 0">
    <div class="loading"></div>
  </div>
  <div class="container full-height"
  v-else>
    <img class="logo" src="../assets/logo.png">
    <p>{{ filter.location }}</p>
    <p>{{ filter.language }}</p>
  </div>
</template>

<script>
import { setUserList } from '../vuex/actions'

export default {
  vuex: {
    getters: {
      filter: state => state.filter,
      userList: state => state.userList
    },
    actions: { setUserList }
  },
  computed: {
    q () {
      let str = 'repos:>0'
      if (this.filter.location) str += 'location:' + this.filter.location
      if (this.filter.language) str += 'language:' + this.filter.language
      return str
    }
  },
  created () {
    this.setUserList(this.q)
  }
}
</script>

<style lang="less" scoped>
  .loader {
    justify-content: center
  }
</style>