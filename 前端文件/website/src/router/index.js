import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home.vue'
import Order from '@/components/order/Order.vue'
import SingleProcess from '@/components/order/SingleProcess.vue'
import Recruit from '@/components/recruit/Recruit.vue'
import About from '@/components/about/About.vue'
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
import Floating from '@/components/common/Floating.vue'
import Focus from '@/components/common/Focus.vue'
import LtdInfo from '@/components/about/LtdInfo.vue'
import JoinUs from '@/components/about/JoinUs.vue'
import ContactUs from '@/components/about/ContactUs.vue'
import Message from '@/components/about/Message.vue'
import FQA from '@/components/about/FQA.vue'
import Login from '@/components/channel/Login.vue'
import affirmOrder from "@/components/order/commponents/affirmOrder.vue"
import successOrder from "@/components/order/commponents/successOrder.vue"
Vue.use(Router)
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    }, {
      path: '/affirmOrder',
      name: 'affirmOrder',
      component: affirmOrder
    },{
      path: '/successOrder',
      name: 'successOrder',
      component: successOrder
    },
    {
      path: '/SingleProcess/:id',
      // name: '/SingleProcess/:id',
      component: SingleProcess
    },
    {
      path: '/recruit',
      name: 'recruit',
      component: Recruit
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/header',
      name: 'header',
      component: Header
    },
    {
      path: '/footer',
      name: 'footer',
      component: Footer
    },
    {
      path: '/floating',
      name: 'floating',
      component: Floating
    },
    {
      path: '/focus',
      name: 'focus',
      component: Focus
    },
    {
      path: '/ltdInfo',
      name: 'ltdInfo',
      component: LtdInfo
    },
    {
      path: '/joinUs',
      name: 'joinUs',
      component: JoinUs
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: ContactUs
    },
    {
      path: '/message',
      name: 'message',
      component: Message
    },
     {
      path: '/fQA',
      name: 'fQA',
      component: FQA
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
