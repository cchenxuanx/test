<template>
    <div>

        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in imagesList" :key="item.id">
                <img :src="item.imageUrl">
            </mt-swipe-item>
        </mt-swipe>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-home"></span>
                <div class="mui-media-body">新闻资讯</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-chatbubble"></span>
                <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-location"></span>
                <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-search"></span>
                <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-phone"></span>
                <div class="mui-media-body">联系我们</div></a></li>
        </ul>
    </div>
</template>

<script>
    import {Toast} from "mint-ui"

    export default {
        data(){
            return{
                lunbotu:[],
                imagesList:[
                    {id:1,imageUrl:"/src/images/image1.jpeg"},
                    {id:2,imageUrl:"/src/images/image2.jpeg"},
                    {id:3,imageUrl:"/src/images/image3.jpeg"}
                ]
            }
        },
        created(){
          this.getLunbotu();
        },
        methods:{
            getLunbotu(){ //获取轮播图数据的方法
                //跨域访问使用jsonp
                this.$http.jsonp("http://api.jisuapi.com/news/get?channel=%E5%A4%B4%E6%9D%A1&start=0&num=10&appkey=%20fd33d0e0df05c689").then(result => {
                    //console.log(result.body)
                    if (result.body.status === "0"){
                        this.lunbotu = result.body.result.list;
                        console.log(this.lunbotu)
                    }else {
                        Toast("加载轮播图失败")
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .mint-swipe{
        height: 200px;
    }
    img{
        height: 100%;
        width: 100%;
    }
    .mui-grid-view.mui-grid-9{
        background-color: white;
        border: none;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border: 0;
    }



    /*.mint-swipe-item:nth-child(1){*/
        /*background-color: orange;*/
    /*}*/
</style>