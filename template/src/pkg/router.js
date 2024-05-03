import { createRouter,createWebHistory } from 'vue-router';

import errorPageImport from '@/components/errorPageImport.vue';

const routes = [
    { 
        path: '/',
        name:'home', 
        component: () => { return import('@/pages/home.vue').then((ml)=>ml).catch((e)=>{console.log(e);return errorPageImport;})}
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes:routes
})

router.onError((e,to,from)=>{
    console.log("errrrrrrrrr",e,from,to);
})

router.beforeEach((to,from,next)=>{
    document.showLoading();
    document.hideAllDropDown();
    next();
})

router.beforeResolve((to,from,next)=>{
    document.hideLoading();
    next();
})
 
export {router};