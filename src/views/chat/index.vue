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
    import MyHeader from "../../components/Header/index";
    import SearchBox from "../../components/Search/index";
    import ChatList from "./module/chatList";
    import MyFooter from "../../components/Footer/index";
    import MoreFun from "../../components/MoreFun/index";

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
