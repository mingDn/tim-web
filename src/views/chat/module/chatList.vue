<template>
    <div id="chat-list">
        <ul style="margin-bottom: 50px">
            <li v-for="user in users">
                <img v-bind:src="user.header">
                <div class="store-text">
                    <p>{{ user.name }}</p>
                    <p>{{ "*********" }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ChatList",
        data() {
            return {
                users: [
                    {name: "ming1", header: require("../../../assets/user/user1.jpg")},
                    {name: "ming2", header: require("../../../assets/user/user2.jpg")},
                    {name: "ming3", header: require("../../../assets/user/user3.jpg")},
                    {name: "ming4", header: require("../../../assets/user/user4.jpg")},
                    {name: "ming1", header: require("../../../assets/user/user1.jpg")},
                    {name: "ming2", header: require("../../../assets/user/user2.jpg")},
                    {name: "ming3", header: require("../../../assets/user/user3.jpg")},
                    {name: "ming4", header: require("../../../assets/user/user4.jpg")},
                    {name: "ming1", header: require("../../../assets/user/user1.jpg")},
                    {name: "ming2", header: require("../../../assets/user/user2.jpg")},
                    {name: "ming3", header: require("../../../assets/user/user3.jpg")},
                    {name: "ming4", header: require("../../../assets/user/user4.jpg")},
                ]
            }
        }
    }
</script>

<style scoped>
    #chat-list {
        width: 100%;
        height: 570px;
        font-size: 14px;
    }

    li {
        /*float: left;*/
        list-style: none;
        width: 100%;
        height: 60px;
    }

    img {
        float: left;
        width: 40px;
        height: 40px;
        margin: 10px 0 0 10px;
        border: 1px solid gray;
        border-radius: 50%;
    }

    .store-text {
        float: right;
        width: 80%;
        height: 80%;
        margin-top: 12px;
    }

    .store-text p {
        height: 50%;
        line-height: 100%;
    }
</style>
