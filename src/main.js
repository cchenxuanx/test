//项目入口

import Vue from "../node_modules/vue/dist/vue.js";
import app from "./app.vue"
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import "./lib/mui/css/mui.min.css"


Vue.use(MintUI);

var vm = new Vue({
   el:"#app",
   data:{},
   methods:{},
    render:function (m) {
        return m(app)
    }
});