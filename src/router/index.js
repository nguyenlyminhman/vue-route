import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";


Vue.use(Router);

export default new Router({
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
            ]
        },

    ]
})

