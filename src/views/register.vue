<template>
    <div>
        <router-link v-bind:to="'/' + 'login'" replace>
            <img src="../assets/icon/back1.png" width="30" height="30" class="back">
        </router-link>
        <p class="welcome">欢迎注册QQ</p>
        <p class="welcome">每一天，乐在沟通。</p>
        <form class="register-box" @submit.prevent="register">
            <input type="tel" id="account" placeholder="手机号码" maxlength="11" @input="accountChecked"
                   @focusin="accountChecked">
            <input type="name" id="name" placeholder="昵称" maxlength="20" @input="nameChecked" @focusin="nameChecked">
            <p class="tips" v-if="!isName">{{ nameTip }}</p>
            <input type="password" id="password" placeholder="密码" maxlength="16" @input="passwordChecked"
                   @focusin="passwordChecked">
            <p class="tips" v-if="!isPassword">{{ passwordTip }}</p>
            <input type="submit" id="register" value="立即注册">
        </form>
        <div class="agreement">
            <input type="checkbox" checked @click="agreementChecked">
            <p>已阅读并同意<span>服务协议</span>和<span>隐私政策</span></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data() {
            return {
                nameTip: '',
                passwordTip: '',
                isName: false,
                isPassword: false,
                isAccount: false,
                isAgreement: true,
            }
        },
        methods: {
            //验证input[id="name"]输入是否符合要求
            nameChecked() {
                let name = $("#name").val();
                let reg = new RegExp("^[ ]+$");
                if (name === "" || name === null) {//昵称输入是否为空
                    this.nameTip = "昵称不可以为空";
                    $("#name").addClass("red");
                    this.isName = false;
                } else if (reg.test(name)) {//昵称输入是否全为空格
                    this.nameTip = "昵称不可以为空格";
                    $("#name").addClass("red");
                    this.isName = false;
                } else {//满足条件
                    $("#name").removeClass("red");
                    this.isName = true;
                }
                this.isRegister();
            },
            //验证input[id="password"]输入是否符合要求
            passwordChecked() {
                let password = $("#password").val();
                if (password === "" || password === null) {//密码输入是否为空
                    this.passwordTip = "密码不能为空";
                    $("#password").addClass("red");
                    this.isPassword = false;
                } else if (password.length < 8) {//密码输入是否超过8位
                    this.passwordTip = "长度为8-16个字符";
                    $("#password").addClass("red");
                    this.isPassword = false;
                } else {//满足条件
                    $("#password").removeClass("red");
                    this.isPassword = true;
                }
                this.isRegister();
            },
            //验证input[id="account"]输入是否符合要求
            accountChecked() {
                if (!($("#account").val().length === 11)) {//手机号输入是否满足11位
                    this.isAccount = false;
                } else {
                    this.isAccount = true;
                }
                this.isRegister();
            },
            //验证是否同意协议
            agreementChecked() {
                this.isAgreement = !this.isAgreement;
                this.isRegister();
            },
            //验证是否符合注册的全部要求
            isRegister() {
                if (this.isName && this.isPassword && this.isAccount && this.isAgreement) {
                    $("#register").addClass("active");
                } else {
                    $("#register").removeClass("active");
                }
            },
            //如果满足所有要求提交表单进行注册，否则不提交表单
            register() {
                let _this = this;
                if ($("#register").hasClass("active")) {
                    $.post("/tim/user/register", {
                        account: $("#account").val(),
                        password: $("#password").val(),
                        name: $("#name").val()
                    }, function (data) {
                        if (data.info === 1) {
                            alert(data.message);
                            _this.$router.push("/login");
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
    .back {
        margin: 20px 15px;
    }

    .welcome {
        font-size: 26px;
        font-weight: 500;
        letter-spacing: 3px;
        margin-left: 30px;
    }

    .welcome:nth-of-type(2) {
        margin-top: 15px;
        font-size: 16px;
        letter-spacing: 2px;
    }

    .register-box {
        margin: 15px 0px;
    }

    .register-box input {
        width: 80%;
        margin: 15px 0px 0px 25px;
        padding: 8px 0px;
        font-size: 16px;
        letter-spacing: 3px;
        text-indent: 0.5em;
        border: 1px solid silver;
        border-radius: 5px;
        outline: none;
        caret-color: #00bcf2;
    }

    #name {
        letter-spacing: 1px;
    }

    .register-box input.red {
        border-color: red;
    }

    .register-box input::-webkit-input-placeholder {
        color: lightgray;
        font-size: 14px;
    }

    .tips {
        margin-left: 25px;
        font-size: 12px;
        color: red;
    }

    #register {
        width: 80%;
        height: 50px;
        border: none;
        outline: none;
        border-radius: 5px;
        margin: 20px 25px;
        background-color: #96E2FF;
        color: white;
        font-size: 16px;
        letter-spacing: 1px;
    }

    #register.active {
        background-color: #00bcf2;
    }

    .agreement {
        margin: 5px 0 0 30px;
    }

    .agreement > input {
        margin-right: 2px;
    }

    .agreement > p {
        display: inline-block;
        color: gray;
        font-size: 12px;
        letter-spacing: 2px;
    }

    .agreement > p > span {
        color: #00bcf2;
    }
</style>
