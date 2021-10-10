import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../components/Home.vue'
import Setup from '../components/Setup.vue'
import LifeCycle from '../components/LifeCycle.vue'

const routes = [{
  name: 'home',
  path: '/',
  meta: { meta: 1 },
  component: Home
}, {
  name: 'setup',
  path: '/setup/:dynamicParam',
  meta: { meta: 1 },
  component: Setup
}, {
  name: 'lifecycle',
  path: '/lifecycle',
  meta: { meta: 1 },
  component: LifeCycle
}]
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export default router