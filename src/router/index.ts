import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import JobsView from '@/views/JobsView.vue'

const route = (path, name, component) => {
  return {
    path,
    name,
    component,
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [route('/', 'home', HomeView), route('/jobs', 'jobs', JobsView)],
})

export default router
