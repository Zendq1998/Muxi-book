<template>
    <div class="navbar">
        <!-- <div class="book-class" :class="{chosed:classchosed[1]}">产品</div>
        <div class="book-class" :class="{chosed:classchosed[2]}">安卓</div>
        <div class="book-class" :class="{chosed:classchosed[3]}">iOS</div>
        <div class="book-class" :class="{chosed:classchosed[4]}">前端</div>
        <div class="book-class" :class="{chosed:classchosed[5]}">后端</div>
        <div class="book-class" :class="{chosed:classchosed[6]}">设计</div>
        <div class="book-class" :class="{chosed:classchosed[7]}">其他</div> -->

        <div v-for="(bookitem, index) in Bookclass" class="book-class cp"
        :key="index"
        :class="{chosed:bookitem.chosed}"
        v-if="bookitem.id != 7 || screenWidth > 500"
        @click="choose(bookitem.id)">{{bookitem.name}}</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                screenWidth: window.innerWidth,
                screenHeight: window.innerHeight,
                Bookclass:[
                    {
                        id: 1,
                        name: '产品',
                        chosed: 1
                    },
                    {
                        id: 2,
                        name: '安卓',
                        chosed: 0
                    },
                    {
                        id: 3,
                        name: '前端',
                        chosed: 0
                    },
                    {
                        id: 4,
                        name: '后端',
                        chosed: 0
                    },
                    {
                        id: 5,
                        name: '设计',
                        chosed: 0
                    },
                    {
                        id: 6,
                        name: '其他',
                        chosed: 0
                    }
                ],         
            };
        },
        components: {
           
        },
        mounted () {
            const that = this
            window.onresize = () => {
                return (() => {
                    window.screenWidth = document.body.clientWidth
                    that.screenWidth = window.screenWidth
                })()
            }
        },
        watch: {
            screenWidth (val) {
                if (!this.timer) {
                    this.screenWidth = val
                    this.timer = true
                    let that = this
                    setTimeout(function () {
                        // that.screenWidth = that.$store.state.canvasWidth
                        that.timer = false
                    }, 400)
                }
            }
        },
        methods: {
            choose(id) {
                const that = this
                for(var i=0;i<that.Bookclass.length;i++){
                    if(that.Bookclass[i].id == id) {
                        that.Bookclass[i].chosed = 1
                    }
                    else{
                        this.Bookclass[i].chosed = 0
                    }
                }
                this.$emit("getkind",id);
            }
        }
    }
</script>

<style lang="scss">
$NavbarHeight: 8vh;
$NavbarColor: #e16a6e;
.navbar{
    background-color: $NavbarColor;
    height: $NavbarHeight;
    font-size: 3vh;
    color: #ffffff;
}
.book-class{
    display: inline-block;
    vertical-align: middle;
    margin-left: 3.7vw;
    line-height: $NavbarHeight - 0.7vh;
    border-bottom: #e16a6e 0.7vh solid;
}
.chosed{
    border-bottom: #ffffff 0.7vh solid;
    font-weight: bold;
}
</style>
