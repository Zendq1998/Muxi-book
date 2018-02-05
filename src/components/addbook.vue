<template>
    <div class="item cp plus" @click="addbook">
       <div class="plus-icon">
           <div class="plus-icon-short icon-left"></div>
           <div class="plus-icon-long"></div>
           <div class="plus-icon-short icon-right"></div>
       </div>
    </div>
</template>

<script>
    import Login from '../service/login.js';
    export default {
        data() {
            return {
                
            };
        },
        props: [
            "authorized"
        ],
        components: {

        },
        methods: {
            addbook: function(){
                if(this.authorized){
                    this.$emit('beginaddbook');
                }
                else{
                    Login.toLoginPage();
                }
            }
        }
    }
</script>

<style lang="scss">


$Plusiconw:5vw;
$Plusiconh:0.5vw;
.plus-icon{
    position: absolute;
    width: $Plusiconw;
    height: $Plusiconw;
    top: 50%;
    left: 50%;
    margin-top: - $Plusiconw/2;
    margin-left: - $Plusiconw/2;
}
.plus:hover > div > div{
    background: #a85255;
}
.plus-icon-long{
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: - $Plusiconw/2;
    margin-left: - $Plusiconh/2;
    width: $Plusiconh;
    height: $Plusiconw;
    background: #e16a6e;
    border-radius: $Plusiconh;
}

.plus-icon-short{
    position: absolute;
    top: 50%;
    margin-top: - $Plusiconh/2;
    width: $Plusiconw/2 - $Plusiconh;
    height: $Plusiconh;
    background: #e16a6e;
    border-radius: $Plusiconh;
}

.icon-right{
    right: 0%;
}
</style>
