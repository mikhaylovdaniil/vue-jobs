import HomeView from '@/views/HomeView.vue'
import JobsView from '@/views/JobsView.vue'
import NotFound from '@/views/NotFound.vue'
import JobView from '@/views/JobView.vue'

const route = (path, name, component) => {
  return {
    path,
    name,
    component,
  }
}

let routes = [
  route('/', 'home', HomeView),
  route('/jobs', 'jobs', JobsView),
  route('/job/:id', 'job', JobView),
]

routes.push(route('/:catchAll(.*)', 'Not Found', NotFound))

const result = routes

export default result
