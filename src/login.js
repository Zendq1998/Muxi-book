import Vue from 'vue'
import login from './common/login.vue'
import style from './main.scss'

new Vue({
    el: "#login",
    render: h => h(login)
})