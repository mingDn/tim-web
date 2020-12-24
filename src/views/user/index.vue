<template>
    <div>
        <MyHeader :title="title" :isIcon="userIcon" :isMore="userMore" :isFun="isFun" @moreFun="moreFun"/>
        <div id="fun" v-if="isMoreFun">
            <ul>
                <li>
                    <router-link :to="{path: '/retrieve', query: {isLoad: true}}">
                        <img src="../../assets/icon/修改密码.png">
                        <p>修改密码</p>
                    </router-link>
                </li>
                <li @click="logOut">
                    <img src="../../assets/icon/退出.png">
                    <p>退出登录</p>
                </li>
            </ul>
        </div>
        <UserData/>
        <UserFun/>
        <MyFooter v-bind:fun-active="userActive"/>
    </div>
</template>

<script>
    import MyHeader from "../../components/Header/index";
    import MyFooter from "../../components/Footer/index";
    import UserData from "./module/userData";
    import UserFun from "./module/userFun";

    export default {
        name: "user",
        components: {
            MyHeader,
            UserData,
            UserFun,
            MyFooter
        },
        data() {
            return {
                title: "用户",
                userActive: 2,
                userIcon: require("../../assets/icon/占位.png"),
                userMore: require("../../assets/icon/设置.png"),
                isMoreFun: false,
                isFun: true
            }
        },
        methods: {
            moreFun(isMoreFun) {
                this.isMoreFun = isMoreFun
            },
            logOut() {
                let _this = this;
                $.post("/tim/user/logout", {account: this.$store.state.user.account}, function (data) {
                    if (data.info === "1") {
                        _this.$store.commit("updateUser", data.user);
                        _this.$router.push("/login");
                    } else {
                        alert(data.message);
                    }
                });
            }
        }
    }
</script>

<style scoped>
    a {
        text-decoration: none;
    }

    #fun {
        position: fixed;
        top: 40px;
        right: 0;
        z-index: 51;
        background-color: white;
        width: 33%;
        opacity: 0.8;
        border-radius: 3px;
    }

    #fun li {
        width: 100%;
        margin: 10px 0;
        list-style: none;
        float: left;
    }

    #fun img {
        width: 20px;
        height: 20px;
        margin: 0px 7px;
        float: left;
    }

    #fun p {
        font-size: 14px;
        letter-spacing: 2px;
        color: black;
    }
</style>
