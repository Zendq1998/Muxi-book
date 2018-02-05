<template>
    <div>
        <form action="" method="get">
            <input type="text" class="input-box">
            <img src="../pictures/icon/search.png" class="input-button cp">
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
               
            };
        },
        components: {
           
        },
        methods: {
        }
    }
</script>

<style lang="scss">
.input-box{
    position: relative;
    top: -1.5vh;
    width: 17.2vw;
    height: 4vh;
    border: 2px solid #676767;
    border-radius: 2.64vw;
}
.input-button{
    height: 4.5vh;
    margin-left: 1vh;
    position: relative;
}
</style>
