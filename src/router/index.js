import VueRouter from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Entry',
        component: () => import('../views/Entry')
    },
    {
        path: '/menu',
        name: 'Menu',
        component: () => import('../views/Menu')
    },
    {
        path: '/cognitive',
        name: 'Cognitive',
        component: () => import('../views/Cognitive')
    },
    {
        path: '/minicog',
        name: 'MiniCog',
        component: () => import('../views/MiniCog')
    },
    {
        path: '/chair-rise-test',
        name: 'ChairRiseTest',
        component: () => import('../views/ChairRiseTest')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router