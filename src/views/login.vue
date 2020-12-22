<template>
    <div>
        <div class="logo">
            <img src="../assets/icon/logo.png">
        </div>
        <form class="load-box" @submit.prevent="load">
            <input type="number" class="account" placeholder="手机号" v-model="account"
                   oninput="if(value.length > 11)value = value.slice(0,11)" @input="isLoad">
            <input type="password" class="account" placeholder="输入密码" v-model="password"
                   oninput="if(value.length > 16)value = value.slice(0,16)" @input="isLoad">
            <input type="submit" id="submit" value="">
        </form>
        <div class="load-link">
            <router-link v-bind:to="{path: '/retrieve', query: {isLoad: false}}" replace>
                <p>忘记密码</p>
            </router-link>
            <span class="link-line"></span>
            <router-link v-bind:to="'/register'" replace>
                <p>用户注册</p>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Load",
        data() {
            return {
                account: "",
                password: ""
            }
        },
        methods: {
            //判断账号密码是否满足登录要求
            isLoad() {
                if (this.account.length === 11 && this.password.length >= 8) {
                    $("#submit").addClass("active");
                } else {
                    $("#submit").removeClass("active");
                }
            },
            //发送登录请求
            load() {
                if ($("#submit").hasClass("active")) {
                    let _this = this;
                    $.post("/tim/user/login", {account: this.account, password: this.password}, function (data) {
                        if (data.info === "1") {
                            _this.$store.commit("updateUser", data.user);
                            _this.$router.push("/chat");
                        } else {
                            alert(data.message);
                        }
                    });
                }
            }
        }
    }
</script>

<style scoped>
    .logo {
        text-align: center;
        margin-top: 100px;
    }

    .logo > img {
        width: 150px;
    }

    .load-box {
        width: 260px;
        margin: 0 auto;
        text-align: center;
        vertical-align: middle;
    }

    .account {
        background-color: #f2f3f7;
        border: 0px;
        outline: none;
        display: inline-block;
        margin-top: 10px;
        width: 260px;
        height: 50px;
        border-radius: 30px;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 2px;
    }

    .account:nth-of-type(2) {
        letter-spacing: 4px;
    }

    .account::-webkit-input-placeholder {
        color: lightgray;
        font-size: 15px;
        letter-spacing: 5px;
    }

    #submit {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border: none;
        outline: none;
        background-image: url("../assets/icon/load.png");
        background-size: 70px 70px;
        margin-top: 40px;
    }

    #submit.active {
        background-image: url("../assets/icon/load-active.png");
    }

    .load-link {
        width: 100%;
        height: 20px;
        margin-top: 220px;
        line-height: 20px;
        text-align: center;
    }

    .load-link p {
        display: inline-block;
        color: #191e2f;
        font-size: 10px;
        letter-spacing: 2px;
        margin: 0 40px;
    }

    .load-link > .link-line {
        border: 1px solid #d2d3d9;
    }
</style>
