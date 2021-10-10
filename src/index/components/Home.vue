<template>
  <h1>vue3学习 当前时间：{{ currentTime }}</h1>
  <p><a href="https://vue3js.cn/start/" target="_blank">《Vue3源码学习入门》</a></p>
  <p><a href="https://vue3js.cn/vue-composition-api/#setup" target="_blank">《Vue3组合Api文档》</a></p>
  <p><a href="https://cli.vuejs.org/zh/config/#全局-cli-配置" target="_blank">《vue-cli配置文档》</a></p>
  <p><a href="https://next.router.vuejs.org/zh/installation.html" target="_blank">《vue-router文档》</a></p>
  <p><a href="https://next.vuex.vuejs.org/zh/index.html" target="_blank">《vue-x文档》</a></p>

  <h1>示例</h1>
  <ul v-for="(item, index) in links" :key="index">
    <li @click="item.navigateTo">> {{ item.title }}</li>
  </ul>
</template>

<script>
import { defineComponent, computed, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Home',
  setup() {
    const store = useStore()

    const currentTime = computed(() => store.state.currentTime)
    setInterval(() => {
      store.commit('setTime')
    }, 1000)

    const router = useRouter()
    const route = useRoute()
    console.log('home -> route', route)

    const links = reactive([{
      title: 'setup学习',
      navigateTo: () => {
        // 路由跳转方式一
        // router.push({
        //   name: 'setup',
        //   params: {
        //     a: 1, // 路由传参，该参数不会体现在url中
        //     dynamicParam: 1 // 路由中要求必须包含这个参数,因为该路由有个动态参数dynamicParam
        //   },
        //   query: {
        //     b: 2 // 路由传参，该参数会体现在url中
        //   }
        // })

        // 路由跳转方式二
        router.push({
          path: `/setup/1`, // 路径中的1会体现在url中，因为该路由有个动态参数dynamicParam
          params: {
            a: 1 // 路由传参，该参数不会体现在url中
          },
          query: {
            b: 2 // 路由传参，该参数会体现在url中
          }
        })
      }
    }, {
      title: '生命周期学习',
      navigateTo: () => {
        router.push({
          name: 'lifecycle',
          params: {
            a: 1, // 路由传参，该参数不会体现在url中
          },
          query: {
            b: 2 // 路由传参，该参数会体现在url中
          }
        })
      }
    }])

    return {
      currentTime,
      links
    }
  },
})
</script>

<style scoped>
ul > li {
  cursor: pointer;
  list-style: none;
}
ul > li:hover {
  color: chocolate;
}
</style>