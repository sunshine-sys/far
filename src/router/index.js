import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import About from '../pages/About/About.vue'
import News from '../pages/News/News.vue'
import Services from '../pages/Services/Services.vue'
import Solution from '../pages/Solution/Solution.vue'
import Contact from '../pages/Contact/Contact.vue'
import Products from '../pages/Products/Products.vue'




Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/msite',
            component: Msite
        },{
            path:'/about',
            component: About
        },{
            path:'/contact',
            component: Contact
        },{
            path:'/products',
            component: Products
        },{
            path:'/solution',
            component: Solution
        },{
            path:'/services',
            component: Services
        },{
            path:'/news',
            component: News
        },{
            path:'/',
            redirect:'/msite'
        }
    ]
})
