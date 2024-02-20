import { createRouter, createWebHistory } from 'vue-router'
import {useStore} from "@/stores"
import {ElMessage} from "element-plus"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'welcome',
      component: () => import('@/views/WelcomeView.vue'),
      children: [
        {
          path:'',
          name: 'welcome-login',
          component: () => import('@/components/welcome/LoginPage.vue')
        },
        {
          path:'register',
          name: 'welcome-register',
          component: () => import('@/components/welcome/RegisterPage.vue')
        } 
      ]
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/views/IndexView.vue')
    },
    {
      path: '/study',
      name: 'study',
      component: () => import('@/views/StudyRoomView.vue'),
      children: [
        {
          path: '',
          name: 'select',
          component: () => import('@/components/StudyRoom/SelectPage.vue')
        },
        {
          path: '/study/:roomId',
          name: 'room',
          component: () => import('@/components/StudyRoom/RoomPage.vue')
        }
      ]

    }


  ]
})

// router.beforeEach((to, from, next) => {
//   const store = useStore()
//   if (store.auth.user != null && to.path == '/') {
//     next('/index')
//   }
//   else if (store.auth.user == null && to.path != '/') {
//     ElMessage.warning('未登录');
//     next('/')
//   }
//   else if (!router.hasRoute(to.name)){
//     next('/')
//   }
//   else {
//     next()
//   }
// })

export default router
