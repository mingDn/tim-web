<template>
    <div class="file-fun">
        <ul>
            <li v-for="item in fun">
                <img v-bind:src="item.icon">
                <p>{{ item.name }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "FileFun",
        data() {
            return {
                fun: [
                    {name: "最近浏览", icon: require("../../assets/icon/最近浏览.png")},
                    {name: "本机文件", icon: require("../../assets/icon/本机文件.png")},
                    {name: "云端文件", icon: require("../../assets/icon/云端文件.png")},
                    {name: "工作文档", icon: require("../../assets/icon/工作文档.png")}
                ]
            }
        }
    }
</script>

<style scoped>
    .file-fun {
        width: 100%;
        height: 60px;
        margin: 25px auto 20px;
        border-bottom: 1px solid #eaeaea;
        text-align: center;
        font-size: 12px;
    }

    li {
        list-style: none;
        float: left;
        width: 25%;
        height: 100%;
    }

    img {
        width: 30px;
        height: 30px;
    }

</style>