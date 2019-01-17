//项目入口

import Vue from "../node_modules/vue/dist/vue.js";
import app from "./app.vue"
import MintUi from 'mint-ui';

import VueResource from "vue-resource"
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;


import 'mint-ui/lib/style.css'
import "./lib/mui/css/mui.min.css"
import "./lib/mui/css/icons-extra.css"

Vue.use(MintUi);

import VueRouter from '../node_modules/vue-router/dist/vue-router.js'
Vue.use(VueRouter);

//导入自己的router.js模块
import router from "./router.js"

var vm = new Vue({
   el:"#app",
   data:{},
   methods:{},
    render:function (m) {
        return m(app)
    },
    router
});