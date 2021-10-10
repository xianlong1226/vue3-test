import { createStore } from 'vuex'
import moment from 'moment-mini'

// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      currentTime: moment().format('YYYY-MM-DD HH:mm:ss')
    }
  },
  mutations: {
    setTime (state) {
      state.currentTime = moment().format('YYYY-MM-DD HH:mm:ss')
    }
  }
})

export default store