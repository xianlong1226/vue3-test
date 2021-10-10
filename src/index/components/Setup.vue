<template>
  <h1>setup学习</h1>
  <div>当前时间：{{ currentTime }}</div>
  <div>路由的参数params：{{ params }}</div>
  <div>路由的参数query：{{ query }}</div>
</template>

<script>
import { defineComponent, ref, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import moment from 'moment-mini'

export default defineComponent({
  name: 'Setup',
  props: {
    name: {
      type: String
    }
  },
  // 1、setup在beforeCreate之前调用，也就意味着这个时候当前组件还没创建呢，所以setup中的this也不会指向当前组件
  setup(props, context) {
    console.log('this', this)
    // props中包含的是在props中声名的组件属性
    // props对象是响应式的，这里不要对其进行解构，否则会失去响应性
    // props是只读的，不要修改它的值
    console.log('props', props)
    console.log('context', context) // context.attrs包含的是所有未在props中声名的组件属性

    const route = useRoute()
    console.log('route', route)
    console.log('route.name', route.name)
    console.log('route.path', route.path)
    console.log('route.fullPath', route.fullPath)
    console.log('route.meta', route.meta)
    console.log('route.params', route.params) // 获取路由跳转时传的params，包含路由动态参数
    console.log('route.query', route.query) // 获取路由跳转时传的query

    const currentTime = ref(moment().format('YYYY-MM-DD HH:mm:ss'))
    console.log('currentTime', currentTime)
    const timer = setInterval(() => {
      // 为什么使用.value赋值，我猜测ref方法为了避免const声名的变量无法修改而特意返回了一个对象，然后通过value来改变值
      currentTime.value = moment().format('YYYY-MM-DD HH:mm:ss')
    }, 1000)

    onBeforeUnmount(() => {
      clearInterval(timer)
    })

    return {
      currentTime,
      params: route.params,
      query: route.query
    }
  },
})
</script>
