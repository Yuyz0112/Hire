<template>
  <div class="container full-height">
    <div class="columns full-height">
      <div class="col">
        <side-nav></side-nav>
      </div>
      <div class="col-2"
      v-show="showFilter">
        <side-filter></side-filter>
      </div>
      <div class="col main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import store from './vuex/store'
import SideNav from './components/SideNav'
import SideFilter from './components/SideFilter'

export default {
  components: { SideNav, SideFilter },
  store: store,
  vuex: {
    getters: {
      showFilter: state => state.showFilter
    }
  }
}
</script>

<style lang="less">
@import './styles/index.less';

html,
body,
.full-height {
  height: 100%;
}
.container {
  background-color: @core-secondary-light-color;
}
.main {
  flex: 1;
}
</style>
