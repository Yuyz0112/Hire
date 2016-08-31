<template>
  <div class="container flex loader full-height"
  v-if="users.length === 0">
    <div class="loading xl"></div>
  </div>
  <div class="container full-height"
  v-else>
    <div class="column col-4 float-left"
    v-for="user of users">
      <div class="card">
        <div class="card-header">
          <div class="container">
            <div class="columns align-center">
              <figure class="avatar avatar-xl">
                <img
                :src="user.avatar_url"/>
              </figure>
              <div class="column user-meta">
                <h4 class="card-title">{{ user.login }}</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer text-center">
          <div class="btn-group">
            <button class="btn">
              <a target="_blank" 
              :href="user.html_url"><i class="iconfont icon-github"></i></a>
            </button>
            <button class="btn"><i class="iconfont icon-star"></i></button>
            <button class="btn"><i class="iconfont icon-mail"></i></button>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">
      <ul class="pagination">
          <li class="page-item">
              <a href="#" class="disabled">
                  Previous
              </a>
          </li>
          <li class="page-item active">
              <a href="#">
                  1
              </a>
          </li>
          <li class="page-item">
              <a href="#">
                  2
              </a>
          </li>
          <li class="page-item">
              <a href="#">
                  3
              </a>
          </li>
          <li class="page-item">
              <span>...</span>
          </li>
          <li class="page-item">
              <a href="#">
                  12
              </a>
          </li>
          <li class="page-item">
              <a href="#">
                  Next
              </a>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { setUserList } from '../vuex/actions'

export default {
  vuex: {
    getters: {
      filter: state => state.filter,
      users: state => state.userList.users,
      userCount: state => state.userList.count
    },
    actions: { setUserList }
  },
  computed: {
    q () {
      let str = 'repos:>1'
      if (this.filter.location) str += '+location:' + this.filter.location
      if (this.filter.language) str += '+language:' + this.filter.language
      return str
    }
  },
  created () {
    this.setUserList(this.q, 1)
  }
}
</script>

<style lang="less" scoped>
  .loader {
    justify-content: center;
  }
  .full-height {
    overflow: auto;
  }
  .card {
    .container {
      background-color: #fff;
    }
    .btn a {
      text-decoration: none;
    }
  }
</style>