import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/SignUpView.vue')
  },
  {
    path: '/summoners/:regeion/:summonerName',
    name: 'summoner',
    component: () => import(/* webpacChunkName: "summoner" */ '@/views/SummonerView.vue')
  },
  {
    path: '/community',
    name: 'community',
    component: () => import('@/views/CommunityView.vue')
  },
  {
    path: '/community/:articleId',
    name: 'article-detail',
    component: () => import('@/views/ArticleView.vue')
  },
  {
    path: '/community/writeArticle',
    name: 'article-write',
    component: () => import('@/views/WriteArticleView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
