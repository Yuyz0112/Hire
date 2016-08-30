<template>
  <div class="side-nav">
    <ul class="text-center">
      <li class="logo" 
      v-link="'/home'"
      @click="changePath('/home')">
        <img class="img-responsive" src="../assets/logo.png">
      </li>
      <li class="flex flex-ease"
      v-for="nav of navs"
      v-link="nav.link"
      @click="changePath(nav.link)">
        <i class="iconfont"
        :class="nav.icon"></i>
        <p>{{ nav.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { toggleFilter } from '../vuex/actions'

export default {
  data () {
    return {
      navs: [
        {
          icon: 'icon-home',
          title: 'Home',
          link: '/home'
        },
        {
          icon: 'icon-star',
          title: 'Collection',
          link: '/collection'
        },
        {
          icon: 'icon-send',
          title: 'Issue',
          link: '/issue'
        },
        {
          icon: 'icon-help',
          title: 'About',
          link: '/about'
        }
      ]
    }
  },
  vuex: {
    actions: { toggleFilter }
  },
  methods: {
    changePath (path) {
      if (path === '/home' || path === '/collection') this.toggleFilter(true)
      else this.toggleFilter(false)
    }
  },
  created () {
    this.changePath(this.$route.path)
  }
}
</script>

<style lang="less" scoped>
  .side-nav {
    background-color: #313541;
    height: 100%;
    color: #727985;
    ul,
    li {
      margin: 0;
    }
    li {
      list-style: none;
      width: 100px;
      height: 100px;
      flex-direction: column;
      justify-content: center;
      cursor: pointer;
      p {
        font-weight: 600;
      }
    }
    .logo {
      &.active {
        background: #313541;
      }
    }
  }
</style>