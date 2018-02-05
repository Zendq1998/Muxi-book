<template>
    <div class="bgshadow"
    @click="ending">
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                screenWidth: window.innerWidth,
                screenHeight: window.innerHeight,
            };
        },
        components: {

        },
        methods: {
            ending: function(){
                this.$emit("ending")
            }
        }
    }
</script>

<style lang="scss">
.bgshadow{
    width: 100%;
    height: 100%;
    top: 0%;
    left: 0%;
    position: fixed;
    filter: Alpha(opacity=50);
    opacity:0.3;
    background:#000000; 
}
</style>
