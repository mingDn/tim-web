<template>
    <div>
        <ul>
            <li v-for="item in funList">
                <img :src="item.icon">
                <p>{{ item.name }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "UserFun",
        data() {
            return {
                funList: [
                    {name: "日程", icon: require("../../../assets/icon/日程.png")},
                    {name: "邮箱", icon: require("../../../assets/icon/邮箱.png")},
                    {name: "电话", icon: require("../../../assets/icon/电话.png")},
                    {name: "收藏", icon: require("../../../assets/icon/收藏.png")},
                    {name: "钱包", icon: require("../../../assets/icon/钱包.png")},
                    {name: "好友动态", icon: require("../../../assets/icon/好友动态.png")},
                ]
            }
        }
    }
</script>

<style scoped>
    li {
        list-style: none;
        margin-left: 20px;
        margin-top: 20px;
    }

    p {
        display: inline-block;
        margin-left: 10px;
        font-size: 14px;
        text-indent: 1em;
    }

    img {
        float: left;
        width: 25px;
        height: 25px;
    }
</style>
