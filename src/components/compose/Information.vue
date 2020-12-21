<template>
    <div class="background">
        <div class="header">
            <img src="../../assets/icon/back2.png" @click="back">
            <p>{{ this.title }}</p>
        </div>
        <div>
            <div class="information">
                <p>
                    <span>昵称</span>
                    {{ this.user.name }}
                    <img src="../../assets/icon/back3.png" class="revise"
                         v-if="isRevise" @click="isName = true, isBirthday= false, isSex = false">
                </p>
                <p>
                    <span>性别</span>
                    {{ this.user.sex }}
                    <img src="../../assets/icon/back3.png" class="revise"
                         v-if="isRevise" @click="isSex = true, isBirthday= false, isName = false">
                </p>
                <p v-if="!isRevise">
                    <span>年龄</span>
                    {{ this.user.age }}
                </p>
                <p>
                    <span>生日</span>
                    {{ this.user.birthday }}
                    <img src="../../assets/icon/back3.png" class="revise"
                         v-if="isRevise" @click="isBirthday = true, isName= false, isSex = false">
                </p>
            </div>
            <div class="fun">
                <button @click="isFun">{{ this.button }}</button>
            </div>
        </div>
        <div class="select-box" v-if="isRevise && (isName || isSex || isBirthday)">
            <div class="back" @click="isBirthday = false, isName= false, isSex = false">
                <img src="../../assets/icon/back4.png">
            </div>
            <div class="name" v-if="isName">
                <input type="text" id="name" placeholder="输入昵称">
            </div>
            <div class="sex" v-if="isSex">
                <p class="male">男</p>
                <p class="female">女</p>
            </div>
            <div class="birthday" v-if="isBirthday">
                <select name="year" id="year" @change="getDays">
                    <option v-for="year in 120">{{ year + 1899 }}</option>
                </select>
                <select name="month" id="month" @change="getDays">
                    <option v-for="month in 12">{{ month }}</option>
                </select>
                <select name="day" id="day">
                    <option v-for="day in 31">{{ day }}</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserInformation",
        data() {
            return {
                title: "详细资料",
                button: "编辑资料",
                user: this.$store.state.user,
                isRevise: false,
                isName: false,
                isSex: false,
                isBirthday: false
            }
        },
        methods: {
            back() {
                if (this.title == "详细资料") {
                    this.$router.push("/user");
                } else if (this.title == "编辑资料") {
                    this.title = "详细资料";
                    this.button = "编辑资料";
                    this.isRevise = false;
                    this.isName = false;
                    this.isSex = false;
                    this.isBirthday = false;
                }
            },
            isFun() {
                if (this.title == "详细资料") {
                    this.title = "编辑资料";
                    this.button = "确认修改";
                    this.isRevise = true;
                } else if (this.title == "编辑资料") {

                }
            },
            getDaysInMonth(month, year) {
                let days;
                if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
                    days = 31;
                } else if (month == 4 || month == 6 || month == 9 || month == 11) {
                    days = 30;
                } else {
                    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
                        days = 29;
                    } else {
                        days = 28;
                    }
                }
                return days;
            },
            getDays() {
                let year = $("#year").val();
                let month = $("#month").val();
                let days = this.getDaysInMonth(month, year);
                $("#day").empty();
                for (let i = 1; i <= days; i++) {
                    $("#day").append("<option value=\""+i+"\">"+i+"</option>");
                }
            }
        }
    }
</script>

<style scoped>
    .background {
        height: 670px;
        background-color: #f5f6fa;
    }

    .header {
        height: 50px;
        width: 100%;
        background-color: #00c9ff;
        z-index: 50;
    }

    .header img {
        margin-top: 11px;
        height: 25px;
        width: 25px;
        float: left;
        margin-left: 10px;
    }

    .header p {
        display: inline-block;
        width: 30%;
        margin-left: 25%;
        font-size: 14px;
        line-height: 50px;
        letter-spacing: 2px;
        color: #fff;
        text-align: center;
    }

    .information {
        width: 100%;
        margin: 15px 0px;
    }

    .information > p {
        width: 100%;
        height: 50px;
        background-color: #fff;
        margin: 1px 0px;
        line-height: 50px;
    }

    .information > p > span {
        font-size: 14px;
        margin: 0px 50px 0px 15px;
    }

    .revise {
        width: 20px;
        height: 20px;
        float: right;
        margin: 15px 10px;
    }

    .fun {
        background-color: white;
        margin: 15px 0px;
    }

    .fun button {
        width: 90%;
        height: 40px;
        background-color: #00CAFC;
        border: none;
        outline: none;
        border-radius: 5px;
        color: white;
        letter-spacing: 3px;
        font-size: 12px;
        margin: 10px 5%;
    }

    .select-box {
        background-color: #f5f6fa;
        position: fixed;
        bottom: 0;
        left: 0;
        height: 30%;
        width: 100%;
    }

    .back {
        height: 15%;
        border-bottom: 1px solid lightgray;
        border-top: 1px solid lightgray;
        background-color: #fff;
    }

    .back > img {
        width: 20px;
        height: 20px;
        margin: 5px 46% 0px;
    }

    .name > input {
        width: 80%;
        margin: 20% 10%;
        border: 1px solid gray;
        outline: none;
        font-size: 16px;
        padding: 5px 0px 4px;
        text-indent: 10px;
    }

    .name > input::placeholder {
        color: lightgray;
    }

    .sex {
        width: 100%;
        height: 15%;
        margin-top: 20%;
        border-top: 1px solid gray;
        border-bottom: 1px solid gray;
    }

    .sex > p {
        width: 100%;
        margin: 4px 0px 15px 0px;
        font-size: 18px;
        text-align: center;
        text-indent: -10px;
    }
</style>