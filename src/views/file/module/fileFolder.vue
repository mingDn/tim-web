<template>
    <div>
        <ul>
            <li v-for="item in folder">
                <div class="folder-box">
                    <img :src="item.icon">
                </div>
                <p class="folder-name">{{ item.name }}</p>
            </li>
        </ul>
        <p class="tip">没有更多了</p>
    </div>
</template>

<script>
    export default {
        name: "FileFolder",
        data() {
            return {
                folder: [
                    {name: "聊天文档", icon: require("../../../assets/icon/文件夹.png")},
                    {name: "聊天文档", icon: require("../../../assets/icon/文件夹.png")},
                    {name: "聊天文档", icon: require("../../../assets/icon/文件夹.png")},
                    {name: "聊天文档", icon: require("../../../assets/icon/文件夹.png")},
                    {name: "聊天文档", icon: require("../../../assets/icon/文件夹.png")},
                    {name: "新建文件夹", icon: require("../../../assets/icon/新建文件.png")}
                ]
            }
        }
    }
</script>

<style scoped>
    li {
        display: inline-block;
        width: 44%;
        margin-left: 4%;
        overflow: hidden;
    }

    .folder-box {
        width: 100%;
        height: 0;
        padding-bottom: 100%;
        background-color: #e6e9ed;
    }

    img {
        width: 50px;
        height: 50px;
        margin: 35%;
    }

    .folder-name {
        text-align: left;
        margin-top: 10px;
        font-size: 14px;
        letter-spacing: 3px;
    }

    .tip {
        text-align: center;
        margin-top: 30px;
        margin-bottom: 20px;
        font-size: 12px;
        letter-spacing: 5px;
        color: lightgray;
    }
</style>
