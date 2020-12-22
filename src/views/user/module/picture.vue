<template>
    <div>
        <div class="header">
            <router-link v-bind:to="'/user'" replace>
                <img src="../../../assets/icon/back2.png">
            </router-link>
            <p>修改头像</p>
        </div>
        <div class="picture">
            <img :src="picture">
            <p>点击更换头像</p>
            <input type="file" id="changePicture" @change="changePicture">
        </div>
        <div class="fun">
            <button @click="submit">确定修改</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Picture",
        data() {
            return {
                picture: '/tim/user/getPicture/' + this.$store.state.user.path,
                file: ""
            }
        },
        methods: {
            changePicture(event) {
                let _this = this;
                let reg = new RegExp("(.*)\\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$");
                if (reg.test(event.target.files[0].name)) {
                    this.file = event.target.files[0];
                    let reader = new FileReader();
                    reader.readAsDataURL(this.file);
                    reader.onload = function () {
                        _this.picture = this.result;
                    }
                } else {
                    alert("文件格式错误");
                }
            },
            submit() {
                let _this = this;
                if (this.file !== "") {
                    let formData = new FormData();
                    formData.append("account", this.$store.state.user.account);
                    formData.append("oldFile", this.$store.state.user.path);
                    formData.append("file", this.file);
                    this.axios({
                        method: "post",
                        url: "/tim/user/changePicture",
                        data: formData,
                        header: {
                            "Content-Type": "multipart/form-data"
                        },
                    }).then(user => _this.$store.commit("updateUser", user.data));
                }
            }
        }
    }
</script>

<style scoped>
    * {
        margin: 0;
        overflow: hidden;
    }

    .header {
        height: 50px;
        width: 100%;
        background-color: #00c9ff;
    }

    .header img {
        margin-top: 11px;
        height: 25px;
        width: 25px;
        float: left;
        margin-left: 10px;
    }

    .header p {
        display: inline-block;
        width: 30%;
        margin-left: 25%;
        font-size: 16px;
        line-height: 50px;
        letter-spacing: 2px;
        color: #fff;
        text-align: center;
    }

    .picture {
        width: 100%;
        height: 40%;
        margin-top: -2px;
        padding: 20% 0 20% 25%;
        background-color: #00c9ff;
        position: relative;
    }

    .picture img {
        height: 150px;
        width: 150px;
        border: 6px solid rgba(211, 211, 211, 0.7);
        border-radius: 50%;
    }

    .picture p {
        width: 150px;
        text-align: center;
        margin-top: 10px;
        color: gray;
        font-size: 12px;
    }

    #changePicture {
        opacity: 0;
        height: 156px;
        width: 156px;
        border-radius: 50%;
        outline: none;
        position: absolute;
        top: 21%;
        left: 21%;
    }

    .fun button {
        width: 90%;
        height: 40px;
        background-color: #00CAFC;
        border: none;
        outline: none;
        border-radius: 5px;
        color: white;
        letter-spacing: 3px;
        font-size: 12px;
        margin: 40px 5%;
    }
</style>
