<template>
    <div id="my-header">
        <img v-bind:src="icon" @click="other">
        {{ message }}
        <img v-bind:src="more" @click="moreFun" id="moreFun">
    </div>
</template>

<script>
    export default {
        name: "MyHeader",
        props: ["title", "isIcon", "isMore", "isFun", "path"],
        data() {
            return {
                message: this.title,
                icon: this.isIcon,
                more: this.isMore,
                isMoreFun: false,
            }
        },
        methods: {
            moreFun() {
                if (this.isFun) {
                    this.isMoreFun = !this.isMoreFun
                    if (this.isMoreFun) {
                        $("#moreFun").css("transform", "rotate(45deg)");
                    } else {
                        $("#moreFun").css("transform", "rotate(0deg)");
                    }
                    this.$emit('moreFun', this.isMoreFun)
                }
            },
            other() {
                if (!(this.path == undefined)) {
                    this.$router.push(this.path);
                }
            }
        }
    }
</script>

<style scoped>
    #my-header {
        height: 50px;
        width: 100%;
        background-color: #128eee;
        line-height: 50px;
        position: fixed;
        top: 0px;
        left: 0px;
        font-size: 16px;
        letter-spacing: 2px;
        color: white;
        text-align: center;
        z-index: 50;
    }

    img {
        margin-top: 11px;
        height: 25px;
        width: 25px;
    }

    #my-header > img:nth-of-type(1) {
        float: left;
        margin-left: 10px;
    }

    #my-header > img:nth-of-type(2) {
        float: right;
        margin-right: 10px;
    }
</style>