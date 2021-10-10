<template>
  <router-view></router-view>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'App',
  components: {
  },
  setup() {
    const count = ref(0)
    const object = reactive({ foo: 'bar' })

    const add = () => {
      count.value += 1
    }

    // 暴露给模板
    return {
      count,
      object,
      add,
    }
  }
}
</script>

<style>
#app {
}
</style>
