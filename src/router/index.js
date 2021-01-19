import Vue from 'vue'
import VueRouter from 'vue-router'
import Workspace from '@/views/Workspace'
import Dashboard from '@/views/Dashboard'
import Module from '@/views/Module'

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        name: '',
        component: Workspace,
        children: [
            {
                path: '/',
                name: 'root',
                component: Dashboard,
                props: { role: 'root' },
                children: [
                    {
                        path: ':section',
                        name: 'section',
                        component: Dashboard,
                        props: { role: 'section' },
                        children: [
                            {
                                path: ':module',
                                name: 'module',
                                component: Module,
                            },
                            {
                                path: ':module/:id',
                                name: 'document',
                                component: Module,
                            },
                        ],
                    },
                ],
            },
        ],
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
