import Vue from 'vue'
import Router from 'vue-router'
import UserProfile from '@/components/UserProfile'
import LogInForm from '@/components/LogInForm'
import Homepage from '@/components/Homepage'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            component: Homepage
        },
        {
            path: '/login',
            name: 'LogIn',
            component: LogInForm
        },
        {
            path: '/user',
            name: 'UserProfile',
            component: UserProfile
        },
        
    ]
})