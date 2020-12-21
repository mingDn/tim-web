import VueRouter from "vue-router"
import Vue from "vue";
import Chat from "../components/compose/Chat";
import File from "../components/compose/File";
import User from "../components/compose/User";
import Load from "../components/compose/Load";
import Register from "../components/compose/Register";
import Retrieve from "../components/compose/Retrieve";
import Friends from "../components/compose/Friends";
import Information from "../components/compose/Information";
import Picture from "../components/compose/Picture";

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            redirect: "/load"
        },
        {
            path: "/load",
            component: Load
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