<template>
    <div class="item">
        <div class="item-info">
            <span class="info-no">{{bookitem.no}}</span>
            <span class="info-book" :title="bookitem.book">《{{bookitem.book}}》</span>
            <span class="info-state" :class="{infowarning:state == 2}">状态：
                <span class="state0" v-if="bookitem.available == 0">已借出</span>
                <span class="state1" v-if="bookitem.available == 1">可借阅</span>
                <span class="state2" v-if="bookitem.available == 2">逾期未还</span>
            </span>
            <span class="info-who" v-if="bookitem.available == 0 || bookitem.available == 2">借书人：{{bookitem.who}}</span>
            <span class="info-when" v-if="bookitem.available == 0 || bookitem.available == 2">归还日期：{{bookitem.when}}</span>
            <div class="info-bt cp" v-if="bookitem.available == 1" @click="borrow(bookitem)">借阅</div>
        </div>
    </div>
</template>

<script>
    import Login from '../service/login.js';
    export default {
        data() {
            return {
                state: bookitem.available
            };
        },
        computed() {
            
        },
        props: [
            "bookitem","authorized"
        ],
        components: {

        },
        methods: {
            borrow: function(bookitem){
                if(this.authorized) {
                    this.$emit("beginborrow",bookitem);
                }
                else {
                    Login.toLoginPage();
                }
            }
        }
    }
</script>

<style lang="scss">


.infowarning{
    color: #f63037;
}

.info-state{
    left: 38%;
}
.info-who{
    left: 57%;
}
.info-when{
    right: 0%;
}
.state2{
    font-size: 1.8vw;
}

$Mainstylecolor:#e16a6e;
</style>
