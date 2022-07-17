import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Editor from '../views/Editor.vue'
import Index from '../views/Index.vue'
import TemplateDetail from '../views/TemplateDetail.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/editor',
      name: 'editor',
      component: Editor
    },
    {
      path: '/template/:id',
      name: 'template',
      component: TemplateDetail
    }
  ]
})

export default router
