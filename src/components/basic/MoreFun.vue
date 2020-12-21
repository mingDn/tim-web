<template>
    <div class="more-fun">
        <ul>
            <li v-for="item in fun">
                <img :src="item.icon">
                <p>{{ item.name }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "MoreFun",
        data() {
            return {
                fun: [
                    {name: "创建群聊", icon: require("../../assets/icon/创建群聊.png")},
                    {name: "加好友", icon: require("../../assets/icon/加好友.png")},
                    {name: "扫一扫", icon: require("../../assets/icon/扫一扫.png")},
                    {name: "面对面快传", icon: require("../../assets/icon/面对面快传.png")}
                ]
            }
        }
    }
</script>

<style scoped>
    .more-fun {
        position: fixed;
        top: 55px;
        right: 0;
        z-index: 51;
        background-color: white;
        width: 50%;
    }

    li {
        width: 100%;
        margin: 10px 0;
        list-style: none;
        float: left;
    }

    img {
        width: 20px;
        height: 20px;
        margin: 0 15px;
        float: left;
    }

    p {
        font-size: 14px;
        letter-spacing: 2px;
    }
</style>