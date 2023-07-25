import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from "../layouts/auth.vue"
import DefaultLayout from '@/layouts/default.vue'
import Discussion from "@/pages/discussions/index.vue"
import Chat from "@/pages/discussions/chat.vue"
import DashboardLayout from "@/layouts/dashboard.vue"
import DashboardIndex from "@/pages/dashboard/index.vue"
import DashboardDiscussions from "@/pages/dashboard/discussions.vue"
import DashboardUsers from "@/pages/dashboard/users.vue"
import { useUsersStore } from '../stores/user'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component: AuthLayout,
      children:[
        {
          path : '',
          component: () => import('../pages/auth/login.vue'),
          name: "login",
          meta:{
            title : "Connectez-vous",
            subtitle : "Je vous assiste tout au long de vos prise de décison juridiques"
          }
        },
        {
          path : 'register',
          component: () => import('../pages/auth/register.vue'),
          name: "register",
          meta:{
            title : "Inscrivez-vous",
            subtitle : "Je vous assiste tout au long de vos prise de décison juridiques"
          }
        }
      ]
    },
    {
      component: DefaultLayout,
      path: "/discussions",
      children:[
        {
          path: "",
          component: Discussion,
          name: "welcome"
        },
        {
          path: ":id",
          component: Chat,
          name: "chat"
        }
      ]

    },
    {
      component : DashboardLayout,
      path:"/dashboard",
      meta:{
        admin: true
      },
      children:[
        {
          path: "",
          name:"dashboard",
          component:DashboardIndex,
          meta:{
            title:"Tableau de bord"
          }
        },
        {
          path: "discussions",
          name:"discussions",
          component:DashboardDiscussions,
          meta:{
            title:"Discussions"
          }
        },
        {
          path: "utilisateurs",
          name:"users",
          component:DashboardUsers,
          meta:{
            title:"Utilisateurs"
          }
        },
        {
          path: "discussions/:id",
          component: Chat,
          name: "chatDetail"
        }
      ]

    }
  ]
})

router.beforeEach(async (to, from, next) => {
  let data
    try{
       data = JSON.parse(localStorage.getItem('current_user') as string)
    }
    catch(error)
    {
      console.log("data", error);
      data = null
    }
  
    if (to.meta.auth) {
      if (!data) next("/dashboard/auth/login");
      else {
        try {
          const user = await useUsersStore().findOne(data.id);
          console.log('user',user)
          next();
        } catch (error: any) {
          next("/dashboard/auth/login");
        }
      }
    }
    else
      next();
  
   
});
export default router
