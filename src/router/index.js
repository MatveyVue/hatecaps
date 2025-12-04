import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/market',
      name: 'market',
      component: () => import('../views/MarketView.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
    },
    {
      path: '/jollychimp',
      name: 'jollychimp',
      component: () => import('../gifts/JollyChimp.vue'),
    },
    {
      path: '/plushpepe',
      name: 'plushpepe',
      component: () => import('../gifts/PlushPepe.vue'),
    },
    {
      path: '/durovcap',
      name: 'durovcap',
      component: () => import('../gifts/DurovCap.vue'),
    },
    {
      path: '/astralshard',
      name: 'astralshard',
      component: () => import('../gifts/AstralShard.vue'),
    },
    {
      path: '/lootbag',
      name: 'lootbag',
      component: () => import('../gifts/LootBag.vue'),
    },
    {
      path: '/preciouspeach',
      name: 'preciouspeach',
      component: () => import('../gifts/PreciousPeach.vue'),
    },
    {
      path: '/swisswatch',
      name: 'swisswatch',
      component: () => import('../gifts/SwissWatch.vue'),
    },
    {
      path: '/vintagecigar',
      name: 'vintagecigar',
      component: () => import('../gifts/VintageCigar.vue'),
    },
    {
      path: '/iongem',
      name: 'iongem',
      component: () => import('../gifts/IonGem.vue'),
    },
    {
      path: '/signetring',
      name: 'signetring',
      component: () => import('../gifts/SignetRing.vue'),
    },
    {
      path: '/diamondring',
      name: 'diamondring',
      component: () => import('../gifts/DiamondRing.vue'),
    },
    {
      path: '/deskcalendar',
      name: 'deskcalendar',
      component: () => import('../gifts/DeskCalendar.vue'),
    },
    {
      path: '/b-daycandle',
      name: 'b-daycandle',
      component: () => import('../gifts/B-DayCandle.vue'),
    },
    {
      path: '/gingercookie',
      name: 'gingercookie',
      component: () => import('../gifts/GingerCookie.vue'),
    },
    {
      path: '/freshsocks',
      name: 'freshsocks',
      component: () => import('../gifts/FreshSocks.vue'),
    },
    {
      path: '/icecream',
      name: 'icecream',
      component: () => import('../gifts2/IceCream.vue'),
    },
    {
      path: '/inputkey',
      name: 'inputkey',
      component: () => import('../gifts2/InputKey.vue'),
    },
  ],
})

export default router
