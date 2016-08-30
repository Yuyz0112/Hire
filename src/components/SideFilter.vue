<template>
  <div class="side-filter">
    <p class="title clearfix">
      Filters<i class="iconfont icon-filter float-right"></i>
    </p>
    <ul class="menu">
      <li class="menu-header mb-5">
        <span class="menu-header-text">Location</span>
      </li>
      <input class="form-input mb-5" type="text" placeholder="e.g.Beijing"
      v-model="location"/>
      <li class="menu-header mb-5">
        <span class="menu-header-text">Languages</span>
      </li>
      <li class="menu-item"
      :class="$index === cur ? 'active' : ''"
      v-for="language of languages">
        <a
        @click="setLang($index, language)">{{ language }}</a>
      </li>
      <select class="form-select mt-5"
      v-model="otherLang"
      @change="selectLang()">
        <option value="none" disabled>Other languages</option>
        <option
        v-for="language of fullLanguages"
        :value="language">{{ language }}</option>
      </select>
      <button class="btn btn-primary btn-block mt-10">
        <span class="iconfont icon-ghost mr-10"></span>Go!
      </button>
    </ul>
  </div>
</template>

<script>
import { languages, fullLanguages } from '../utils/constants'
import { setLocation, setLanguage } from '../vuex/actions'

export default {
  data () {
    return {
      location: '',
      languages: Array.concat(['All languages'], languages),
      fullLanguages,
      cur: 0,
      lang: 'All languages',
      otherLang: 'none'
    }
  },
  computed: {
    filterLang () {
      return this.lang === 'All languages' ? ''
      : this.cur !== -1 ? this.lang
      : this.otherLang
    }
  },
  methods: {
    setLang (i, language) {
      this.cur = i
      this.lang = language
      this.otherLang = 'none'
    },
    selectLang () {
      this.lang = ''
      this.cur = -1
    }
  },
  vuex: {
    actions: { setLocation, setLanguage }
  },
  watch: {
    location (val) {
      this.setLocation(val)
    },
    filterLang (val) {
      this.setLanguage(val)
    }
  }
}
</script>

<style lang="less" scoped>
  .side-filter {
    background-color: #282c37;
    height: 100%;
    color: #727985;
    padding: 1rem 1.5rem;
    .title {
      font-size: 2rem;
      margin-bottom: 0;
      .iconfont {
        font-size: 2rem;
      }
    }
    .menu-header {
    }
    .menu-item {
      &.active {
        background-color: #1f222d;
      }
      a {
        cursor: pointer;
      }
    }
    select {
      width: 100%;
    }
    .btn {
      .iconfont {
        font-size: 1.4rem;
      }
    }
  }
</style>