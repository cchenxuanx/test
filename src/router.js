import VueRouter from '../node_modules/vue-router/dist/vue-router.js'
import HomeContainer from "./components/tabbar/Home.vue"
import MemberContainer from "./components/tabbar/Member.vue"
import CartContainer from "./components/tabbar/Cart.vue"
import SearchContainer from "./components/tabbar/Search.vue"




//创建路由对象
var router = new VueRouter({
    routes:[
        {path:"/",redirect:'/home'},
        {path:"/home",component:HomeContainer},
        {path:"/member",component:MemberContainer},
        {path:"/cart",component:CartContainer},
        {path:"/search",component:SearchContainer}

    ],
    linkActiveClass:"mui-active" //替换大类中的一个小类

});

export default router;