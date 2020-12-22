<template>
    <div>
        <div class="person-bg">
            <div class="user-data">
                <router-link v-bind:to="'/information'" replace>
                    <p class="user-name">{{ user.name }}</p>
                    <p class="user-number">{{ user.number }}</p>
                </router-link>
                <router-link v-bind:to="'/picture'" replace>
                    <img :src="user.path">
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserData",
        data() {
            return {
                user: {
                    name: this.$store.state.user.name,
                    number: this.$store.state.user.account,
                    path: '/tim/user/getPicture/' + this.$store.state.user.path
                }
            }
        }
    }
</script>

<style scoped>
    a {
        text-decoration: none;
    }

    .person-bg {
        width: 100%;
        height: 110px;
        background-color: #128eee;
        margin: 49px auto 0px;
        padding-top: 40px;
    }

    p {
        width: 50%;
        line-height: 40px;
        margin-left: 15px;
    }

    .user-name {
        font-size: 28px;
        color: white;
    }

    .user-number {
        font-size: 12px;
        color: lightgray;
    }

    img {
        height: 100px;
        width: 100px;
        margin: -100px 20px 0 0;
        border: 4px solid rgba(211,211,211,0.7);
        border-radius: 50%;
        float: right;
    }
</style>