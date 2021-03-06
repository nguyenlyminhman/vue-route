import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store";


Vue.use(Router);
const router = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
            props: true
        },
        {
            path: "/about",
            name: "about",
            component: () => import(/* webpackChunkName: "about" */ "../views/About"),
            props: true
        },
        {
            path: "/destination/:slug",
            name: "DestinationDetails",
            component: () => import(/* webpackChunkName: "destination-details" */ "../views/DestinationDetails"),
            props: true,
            children: [
                {
                    path: ":experienceSlug",
                    name: "ExperienceDetails",
                    component: () => import(/* webpackChunkName: "experience-details" */ "../views/ExperienceDetails"),
                    props: true
                }
            ],
            beforeEnter: (to, from, next) => {
                const exist = store.destinations.find(
                    destination => destination.slug === to.params.slug
                )
                if (exist) {
                    next();
                } else {
                    next({ name: "notFound" });
                }
            }
        },
        {
            path: "/user",
            name: "user",
            component: () => import(/* webpackChunkName: "user" */ "../views/User"),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/login",
            name: "login",
            component: () => import(/* webpackChunkName: "user" */ "../views/Login"),
        },
        {
            path: "/404",
            alias: "*",
            name: "notFound",
            component: () => import(/* webpackChunkName: "notFound" */ "../views/NotFound"),
        }
    ]
})

router.beforeEach((to, from, next)=>{
   if(to.matched.some(record => record.meta.requiresAuth)){
        if(!store.user){
            next({name: "login"});
        }else{
            next();
        }
   } else {
       next();
   }
})

export default router;