<template>
    <div class="item"> 
        <div class="item-info">
            <span class="info-no">{{bookitem.no}}</span>
            <span class="info-book" :title="bookitem.bookname">《{{bookitem.bookname}}》</span>        
            <div class="info-when">归还日期：{{bookitem.return_time}}</div>
            <div class="info-bt cp return" @click="returnBook(bookitem)">还书</div>
            <div class="info-bt cp" @click="renewBook(bookitem)">续借</div>
        </div>
    </div>
</template>

<script>
    
    export default {
        data() {
            return {
                postData:{
                no: this.bookitem.no ,
                username: this.username
            },
            };
        },
        computed() {
            
        },
        mounted() {

        },
        props: [
            "bookitem",
            "username"
        ],
        components: {

        },
        methods: {
            returnBook: function() {
                this.$emit('returnBook',this.bookitem)
                },
            renewBook: function() {
                this.$emit('renewBook',this.bookitem)
                }
            },
            
        }
    
</script>

<style lang="scss">

.info-when{
    position: relative;
    left: 40%;
}

.return{
    position: absolute;
    right: 20%;
}
</style>
