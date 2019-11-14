import Vue from "vue";
import Router from "vue-router";
 import Home from "../views/Home.vue";


Vue.use(Router);

export default new Router({
    linkActiveClass: "ecec",
    routes:[
        {
            path:"/",
            name:"home",
            component: Home
        },
        {
            path: "/brazil",
            name: "brazil",
            component: ()=> import(/* webpackChunkName: "brazil" */ "../views/Brazil")
        },
        {
            path:"/hawaii",
            name:"hawaii",
            component: ()=> import(/* webpackChunkName: "hawaii" */ "../views/Hawaii")
        },
        {
            path:"/jamaica",
            name:"jamaica",
            component: ()=> import(/* webpackChunkName: "jamaica" */ "../views/Jamaica")
        },
        {
            path:"/panama",
            name:"panama",
            component: ()=> import(/* webpackChunkName: "panama" */ "../views/Panama")
        },
        {
            path:"/about",
            name:"about",
            component: ()=> import(/* webpackChunkName: "about" */ "../views/About")
        },
        {
            path:"/destination-detail",
            name:"DestinationDetails",
            component: ()=> import(/* webpackChunkName: "destination-details" */ "../views/DestinationDetails")
        }
    ]
})

