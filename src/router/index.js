import VueRouter from "vue-router"
import Vue from "vue";
import Chat from "../views/chat/index";
import File from "../views/file/index";
import User from "../views/user/index";
import Login from "../views/login";
import Register from "../views/register";
import Retrieve from "../views/retrieve";
import Friends from "../views/friends/index";
import Information from "../views/user/module/information";
import Picture from "../views/user/module/picture";

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            redirect: "/login"
        },
        {
            path: "/login",
            component: Login
        },
        {
            path: "/chat",
            component: Chat,
            meta: {
                requireAuth: true
            }
        },
        {
            path: "/friends",
            component: Friends,
            meta: {
                requireAuth: true
            }
        },
        {
            path: "/file",
            component: File,
            meta: {
                requireAuth: true
            }
        },
        {
            path: "/user",
            component: User,
            meta: {
                requireAuth: true
            }
        },
        {
            path: "/register",
            component: Register
        },
        {
            path: "/retrieve",
            component: Retrieve
        },
        {
            path: "/information",
            component: Information,
            meta: {
                requireAuth: true
            }
        },
        {
            path: "/picture",
            component: Picture,
            meta: {
                requireAuth: true
            }
        }
    ]
})

export default router
