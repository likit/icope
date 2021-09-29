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
    {
        path: '/sppb',
        name: 'SPPB',
        component: () => import('../views/SPPB')
    },
    {
        path: '/mulnutrition',
        name: 'Mulnutrition',
        component: () => import('../views/Mulnutrition')
    },
    {
        path: '/mna-screening',
        name: 'MNAScreening',
        component: () => import('../views/MNAScreening')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router