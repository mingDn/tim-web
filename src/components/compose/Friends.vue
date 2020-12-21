<template>
    <div>
        <div class="header">
            <p class="add">添加</p>
            <p class="title">联系人</p>
            <router-link v-bind:to="'/chat'" replace>
                <img src="../../assets/icon/back3.png" class="back" width="30px" height="30px">
            </router-link>
        </div>
        <SearchBox></SearchBox>
        <div class="fun">
            <ul>
                <li v-for="item in fun">
                    <img v-bind:src="item.icon">
                    <p>{{ item.name }}</p>
                </li>
            </ul>
        </div>
        <el-collapse class="friends">
            <el-collapse-item v-for="(group,index) in groups" :title="group.groupName"
                              @click.native="friendsSelect(group.groupId)">
                    <div class="friend" v-for="friend in friends[group.groupId - 1]">
                        <img v-bind:src="'/tim/user/getPicture/' + friend.path">
                        <div class="store-text">
                            <p>{{ friend.name }}<span>({{ friend.account }})</span></p>
                        </div>
                    </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    import SearchBox from "../basic/SearchBox";

    export default {
        name: "Friends",
        components: {
            SearchBox
        },
        data() {
            return {
                fun: [
                    {name: "新朋友", icon: require("../../assets/icon/新朋友.png")},
                    {name: "群聊", icon: require("../../assets/icon/群聊.png")},
                    {name: "名片夹", icon: require("../../assets/icon/名片夹.png")},
                ],
                groups: this.groupSelect(),
                friends: []
            }
        },
        computed: {},
        methods: {
            groupSelect() {
                let _this = this;
                $.post("/tim/friends/groupSelect", {account: _this.$store.state.user.account}, function (data) {
                    _this.groups = data;
                })
            },
            friendsSelect(groupId) {
                let _this = this;
                let id = groupId;
                $.post("/tim/friends/friendsSelect", {
                    account: _this.$store.state.user.account,
                    groupId: id
                }, function (data) {
                    _this.$set(_this.friends, id - 1, data);
                });
            }
        }
    }
</script>

<style>
    .el-collapse-item__header {
        text-indent: 25px;
        font-size: 14px !important;
        cursor: none !important;
    }

    .el-collapse-item__header > i {
        padding-right: 25px;
        display: inline;
    }

    .el-collapse-item.is-active .el-collapse-item__content {
        padding-bottom: 0px !important;
    }
</style>

<style scoped>
    .header {
        height: 50px;
        width: 100%;
        background-color: #f6f7f9;
        line-height: 50px;
        position: fixed;
        top: 0px;
        left: 0px;
        font-size: 16px;
        letter-spacing: 2px;
        color: black;
        text-align: center;
        z-index: 50;
    }

    .add {
        display: inline-block;
        float: left;
        margin-left: 10px;
        font-size: 14px;
    }

    .title {
        display: inline-block;
    }

    .back {
        float: right;
        margin: 10px;
    }

    .fun {
        width: 100%;
        height: 80px;
        margin: 25px auto 10px;
        border-bottom: 1px solid #eaeaea;
        text-align: center;
        font-size: 12px;
    }

    .fun li {
        list-style: none;
        float: left;
        width: 33%;
        height: 100%;
    }

    .fun img {
        width: 30px;
        height: 30px;
    }

    .friends {
        width: 100%;
        height: 517px;
        overflow: scroll;
    }

    .friends .friend {
        float: left;
        list-style: none;
        width: 100%;
        height: 60px;
    }

    .friends .friend img {
        float: left;
        width: 40px;
        height: 40px;
        margin: 10px 10px 10px 15px;
        border: 1px solid lightgray;
    }

    .store-text {
        float: right;
        width: 75%;
        height: 80%;
        margin-top: 6%;
        font-size: 18px;
    }

    .store-text > p {
        height: 100%;
        line-height: 100%;
    }

    .store-text > p > span {
        font-size: 12px;
        color: gray;
        margin-left: 5px;
    }
</style>