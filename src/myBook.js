import Vue from 'vue'
import mybook from './common/mybook.vue'
import style from './main.scss'

new Vue({
    el: "#mybook",
    render: h => h(mybook)
})