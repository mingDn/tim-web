<template>
    <div>
        <MyHeader :title="title" :isIcon="chatIcon" :isMore="chatMore" :isFun="isFun" :path="'/friends'" @moreFun="moreFun"/>
        <MoreFun v-if="isMoreFun"/>
        <div class="chat">
            <SearchBox/>
            <ChatList/>
        </div>
        <MyFooter :funActive="chatActive"/>
    </div>
</template>

<script>
    import MyHeader from "../basic/MyHeader";
    import SearchBox from "../basic/SearchBox";
    import ChatList from "../basic/ChatList";
    import MyFooter from "../basic/MyFooter";
    import MoreFun from "../basic/MoreFun";

    export default {
        name: "Chat",
        components: {
            MyHeader,
            SearchBox,
            ChatList,
            MoreFun,
            MyFooter
        },
        data() {
            return {
                title: "消息",
                chatActive: 0,
                chatIcon: require("../../assets/icon/联系人.png"),
                chatMore: require("../../assets/icon/更多.png"),
                isMoreFun: false,
                isFun: true,
            }
        },
        methods: {
            moreFun(isMoreFun) {
                this.isMoreFun = isMoreFun
            }
        }
    }
</script>

<style scoped>
    .chat{
        height: 665px;
        overflow: scroll;
    }
</style>