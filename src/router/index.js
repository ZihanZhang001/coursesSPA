import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Courses from '@/components/Courses'
import Release from '@/components/Release'
import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
import Edit from '@/components/Edit'
import CMap from '@/components/CMap'
import Login from '@/components/Login'
import Main from '@/components/Main'
import Message from '@/components/Loginmessage'
import Logout from '@/components/Logout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/courses',
      name: 'Courses',
      component: Courses
    },
    {
      path: '/release',
      name: 'Release',
      component: Release
    },
    {
      path: '/map',
      name: 'Map',
      component: CMap
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/about',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/contact',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit,
      props: true
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    }
  ]
})
