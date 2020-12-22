<template>
    <div class="fixed-wrap">
        <div id="my-footer">
            <ul>
                <li v-for="(item,index) in fun" v-bind:item.isActive=isActive(index)>
                    <router-link v-bind:to="'/' + item.name" replace>
                        <img v-bind:src="item.isActive?item.active:item.icon">
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyFooter",
        props: ["funActive"],
        data() {
            return {
                fun: [
                    {
                        name: "chat",
                        icon: require("../../assets/icon/聊天.png"),
                        active: require("../../assets/icon/聊天(1).png"),
                        isActive: false
                    },
                    {
                        name: "file",
                        icon: require("../../assets/icon/文件.png"),
                        active: require("../../assets/icon/文件(1).png"),
                        isActive: false
                    },
                    {
                        name: "user",
                        icon: require("../../assets/icon/个人.png"),
                        active: require("../../assets/icon/个人(1).png"),
                        isActive: false
                    }]
            }
        },
        computed: {
            isActive() {
                return function (index) {
                    if (this.fun[index].isActive == false && index == this.funActive) {
                        this.fun[index].isActive = true
                    } else {
                        return
                    }
                }
            }
        }
    }
</script>

<style scoped>
    #my-footer {
        height: 55px;
        width: 100%;
        border-top: 1px solid #ececec;
        background-color: white;
        position: fixed;
        bottom: 0px;
        left: 0px;
        text-align: center;
        z-index: 50;
    }

    img {
        vertical-align: middle;
        width: 30px;
        height: 30px;
    }

    ul {
        list-style: none;
    }

    li {
        line-height: 55px;
        float: left;
        height: 55px;
        width: 33.3%;
    }
</style>