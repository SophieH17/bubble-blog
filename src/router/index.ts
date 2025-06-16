import { createWebHistory, createRouter } from 'vue-router'

import indexView from '../views/indexView.vue'

const routes = [
  {
    path: '/',
    redirect: '/overview',
    component: indexView,
    children: [
      {
        path: 'overview',
        component: ()=>import('../views/overview.vue'),
      },
    //   {
    //     // 当 /user/:id/posts 匹配成功
    //     // UserPosts 将被渲染到 User 的 <router-view> 内部
    //     path: 'posts',
    //     component: HelloWorld,
    //   },
    ],
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router