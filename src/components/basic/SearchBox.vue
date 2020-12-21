<template>
    <div id="search">
        <img class="search-icon" src="../../assets/icon/搜索.png">
        <p class="search-text">搜索</p>
    </div>
</template>

<script>
    export default {
        name: "Search",
    }
</script>

<style scoped>
    #search {
        margin: 55px auto 10px;
        width: 95%;
        height: 30px;
        background-color: #F7F8F9;
        font-size: 13px;
        line-height: 30px;
        text-align: center;
        color: #a7a7a7;
        letter-spacing: 5px;
    }

    .search-icon {
        margin-top: 5px;
        height: 20px;
        width: 20px;
    }

    .search-text {
        display: inline-block;
        vertical-align: top;
    }
</style>