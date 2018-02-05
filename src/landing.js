import Vue from 'vue'
import landing from './common/landing.vue'
import style from './main.scss'

new Vue({
    el: "#landing",
    render: h => h(landing)
})