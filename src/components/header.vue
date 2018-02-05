<template>
    <div class="header">
        <div class="head-content">
            <img src="../pictures/icon/muxibook.png" alt="muxi-book" class="logo">
            <v-search class="search"></v-search>
            <!-- 没有登录显示“登录/注册” -->
            <div class="personal-center cp"
            @click="login"
            v-if="!authorized">
                <span v-if="screenWidth > 900 && screenWidth > screenHeight" class="my-borrow">登录/注册</span>    
                <img src="../pictures/icon/personal-center.png" class="person-logo">
            </div>
            <!-- 登录过显示“我的借阅” -->
            <div class="personal-center cp"
            @click="gomybook()"
            v-if="authorized">
                <span v-if="screenWidth > 900 && screenWidth > screenHeight" class="my-borrow">我的借阅</span>    
                <img src="../pictures/icon/personal-center.png" class="person-logo">
            </div>
        </div>
    </div>
</template>

<script>
    import Search from './searcher.vue';
    import Cookie from '../service/cookie.js';
    import Login from '../service/login.js';
    export default {
        data() {
            return {
                screenWidth: window.innerWidth,
                screenHeight: window.innerHeight,
            };
        },
        props:['authorized'],
        mounted () {
            const that = this
            window.onresize = () => {
                return (() => {
                    window.screenWidth = document.body.clientWidth
                    that.screenWidth = window.screenWidth
                })()
            }
        },
        components: {
           'v-search': Search
        },
        methods: {
            gomybook:function(){
                window.location.href = './mybook'
            },
            login() {
               Login.toLoginPage();
            }
        }
    }
</script>

<style lang="scss">
// 总宽1280px 高1095
$HeadHeight: 7.5vh;
$ContentHeight: 3.44vh;
$PersonHeight: 6.3vh;
.header{
    height: $HeadHeight;
    background-color: #ffffff;
}
.head-content{
    background-position: center;
    height: $ContentHeight;
    vertical-align: middle;
    margin-top: ($HeadHeight - $ContentHeight);
}
.logo{
    position: absolute;
    height: 3.9vh;
    left: 3.7vw;
}
.search{
    position: absolute;
    right: 20.2vw;
}
.personal-center{
    position: absolute;
    top:  ($PersonHeight/2) ;
    right: 3.6vw;
    text-align: center;
    font-size: 23px;
    color: #6e6e6e;
}
.my-borrow{
    position: relative;
    top: - ($PersonHeight/4);
}
.my-borrow:hover{
    text-decoration: underline;
}
.person-logo{
    width: $PersonHeight;
}
.sign {
    height: 20px;
    width: 80px;
    color: #959595;
    margin: 0 -2px;
    font-size: 14px;
    position: absolute;
    right: 0;
	top: 0;
}
</style>
