import { createRouter, createWebHashHistory } from 'vue-router'
const Home = () => import('../views/main/home/Home')
const Submit = () => import('../views/main/submit/Submit')
const Cooperation = () => import('../views/main/cooperation/Cooperation')

const News1 = () => import('../views/main/home/news/News1')
const News2 = () => import('../views/main/home/news/News2')
const News3 = () => import('../views/main/home/news/News3')
const News4 = () => import('../views/main/home/news/News4')
const News5 = () => import('../views/main/home/news/News5')
const News6 = () => import('../views/main/home/news/News6')

const SwiperNews1 = () => import('../views/main/home/news/SwiperNews1')
const SwiperNews2 = () => import('../views/main/home/news/SwiperNews2')
const SwiperNews3 = () => import('../views/main/home/news/SwiperNews3')
const SwiperNews4 = () => import('../views/main/home/news/SwiperNews4')




const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/submit',
    component: Submit
  },
  {
    path: '/cooperation',
    component: Cooperation
  },
  {
    path: '/news1',
    component: News1
  },
  {
    path: '/news2',
    component: News2
  },
  {
    path: '/news3',
    component: News3
  },
  {
    path: '/news4',
    component: News4
  },
  {
    path: '/news5',
    component: News5
  },
  {
    path: '/news6',
    component: News6
  },
  {
    path: '/swiperNews1',
    component: SwiperNews1
  },
  {
    path: '/swiperNews2',
    component: SwiperNews2
  },
  {
    path: '/swiperNews3',
    component: SwiperNews3
  },
  {
    path: '/swiperNews4',
    component: SwiperNews4
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
