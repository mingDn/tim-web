<template>
    <div class="file-con">
        <MyHeader v-bind:title="title" :isIcon="fileIcon" :isMore="fileMore" :isFun="isFun" @moreFun="moreFun"/>
        <MoreFun v-if="isMoreFun"/>
        <div class="file">
            <SearchBox/>
            <FileFun/>
            <FileFolder/>
        </div>
        <MyFooter v-bind:funActive="fileActive"/>
    </div>
</template>

<script>
    import MyHeader from "../../components/Header/index";
    import SearchBox from "../../components/Search/index";
    import FileFun from "./module/fileFun";
    import MyFooter from "../../components/Footer/index";
    import FileFolder from "./module/fileFolder";
    import MoreFun from "../../components/MoreFun/index";

    export default {
        name: "File",
        components: {
            MyHeader,
            SearchBox,
            FileFun,
            FileFolder,
            MoreFun,
            MyFooter
        },
        data() {
            return {
                title: "云文件",
                fileActive: 1,
                fileIcon: require("../../assets/icon/电脑.png"),
                fileMore: require("../../assets/icon/更多.png"),
                isMoreFun: false,
                isFun: false,
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
    .file{
        height: 665px;
        overflow: scroll;
    }

    .file-con{
        position: relative;
        height: 600px;
    }
</style>
