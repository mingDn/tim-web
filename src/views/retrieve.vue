<template>
    <div>
        <div class="header">
            <img src="../assets/icon/back2.png" width="25" height="25" id="back" @click="back">
            <p class="title">{{ this.title }}</p>
        </div>
        <div class="wrap" id="accountWrap" v-if="!isRevise">
            <p class="tips">账号：</p>
            <input type="tel" id="account" v-model="account" class="account-input" placeholder="手机号" autofocus maxlength="11">
            <input type="text" id="verifyCode" v-model="verifyCode" placeholder="验证码" maxlength="4">
            <img :src="src" class="codeImg" onclick="this.src += '?'">
            <button class="submit" @click="retrieve">确定</button>
        </div>
        <div class="wrap" id="passwordWrap" v-if="isRevise">
            <p class="tips">新密码：</p>
            <input type="password" id="password" class="account-input" placeholder="输入新密码" autofocus maxlength="16">
            <p class="tips">确认密码：</p>
            <input type="password" id="rePassword" class="account-input" placeholder="再次输入新密码" maxlength="16">
            <button class="submit" @click="updatePassword">确定</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Retrieve",
        data() {
            return {
                title: "输入账号",
                src: "/tim/user/getCode",
                account: "",
                verifyCode: "",
                isRevise: false,
                isLoad: false
            }
        },
        mounted() {
            if (this.$route.query.isLoad || this.$route.query.isLoad === "true") {
                this.isLoad = true;
            }
            this.revise();
        },
        methods: {
            revise() {
                if (this.isLoad) {
                    this.account = this.$store.state.user.account;
                    this.title = "修改密码";
                    this.isRevise = true;
                }
            },
            back() {
                if (this.title === "输入账号") {
                    this.$router.push("/login");
                } else if (this.title === "修改密码") {
                    if (!this.isLoad) {
                        this.title = "输入账号";
                        this.isRevise = false;
                    } else {
                        this.$router.push("/user");
                    }
                }
            },
            retrieve() {
                let _this = this;
                if (this.account.length < 11) {
                    alert("请输入长度为11位的账号");
                } else {
                    $.post("/tim/user/accountCheck", {
                        account: _this.account,
                        verifyCode: _this.verifyCode
                    }, function (data) {
                        if (data.info === "1") {
                            _this.title = "修改密码";
                            _this.isRevise = true;
                            alert(data.message);
                        } else {
                            alert(data.message);
                        }
                    });
                }
                this.src += '?'
            },
            updatePassword() {
                let _this = this;
                let password = $("#password").val(),
                    rePassword = $("#rePassword").val();
                if (password.length < 8) {
                    alert("密码为8-16个字符");
                } else if (!(password === rePassword)) {
                    alert("两次输入密码不一致");
                } else {
                    $.post("/tim/user/updatePassword", {
                        account: _this.account,
                        password: password
                    }, function (data) {
                        if (data.info === "1") {
                            alert(data.message);
                        } else {
                            alert(data.message);
                        }
                    });
                    _this.$router.push("/login");
                }
            }
        }
    }
</script>

<style scoped>
    .header {
        width: 100%;
        background-color: #00bcf2;
    }

    #back {
        margin: 10px 5px;
    }

    .title {
        float: right;
        margin: 14px 40% 0px 0px;
        font-size: 15px;
        letter-spacing: 3px;
        color: #fff;
    }

    .wrap {
        height: 671px;
        width: 100%;
        background-color: #eaeaea;
        padding-top: 20px;
        overflow: hidden;
    }

    .tips {
        margin: 5px 15px;
        font-size: 14px;
        letter-spacing: 3px;
        color: darkgray;
    }

    .account-input {
        width: 100%;
        background-color: white;
        border: gray solid;
        border-width: 1px 0;
        outline: none;
        margin: 5px 0;
        padding: 13px;
        font-size: 14px;
        letter-spacing: 3px;
    }

    #verifyCode {
        width: 40%;
        background-color: white;
        border: gray 1px solid;
        outline: none;
        margin: 10px;
        padding: 10px;
        font-size: 14px;
    }

    .codeImg {
        float: right;
        width: 120px;
        height: 38px;
        margin: 10px;
        cursor: pointer;
    }

    .submit {
        width: 90%;
        height: 40px;
        margin: 30px 5% 0px;
        background-color: dodgerblue;
        border: none;
        outline: none;
        border-radius: 5px;
        color: white;
        font-size: 14px;
        letter-spacing: 5px;
    }
</style>
