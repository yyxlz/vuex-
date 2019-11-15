import Vue from 'vue'
import Vuex from 'vuex'

// 引入
import * as auth from '@/utils/auth'

// 全匹配

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 获取用户信息   包好token
    user: auth.getUser()
  },
  mutations: {
    // 修改
    setUser (state, user) {
      // 修改
      state.use = user
      // 更新到本地
      auth.setUser(user)
    },
    // 清除用户信息
    delUser (state) {
      state.user = {}
      // 更新到本地
      auth.delUser()
    }
  },
  actions: {},
  modules: {}
})
