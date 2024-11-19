import { createRouter, createWebHashHistory } from "vue-router";
import SignIn from './view/sign-in.vue';
import SignUp from "./view/sign-up.vue";
import MainView from "./view/main-view.vue";
import AboutUs from "./view/about-us.vue";


const routes = [
    {
        path:'/',
        component: SignIn
    },
    {
        path:'/signup',
        component: SignUp
    },
    {
        path:'/signin',
        component: SignIn
    },
    {
        path:'/app',
        component: MainView
    },
    {
        path:'/about-us',
        component: AboutUs
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes,
});

export default router;