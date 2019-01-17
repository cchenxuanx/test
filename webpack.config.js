//这个配置文件是一个js文件，通过Node中的模块操作向外暴露了一个配置对象

const path = require('path');
const webpack = require('webpack'); //启用热更新第二步
const htmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");


module.exports = {

    mode:'development',
    //手动配置入口和出口
    entry:path.join(__dirname,'./src/main.js'), //入口,表示要打包的哪个文件
    output:{ //输出文件相关的配置
        path:path.join(__dirname,'./dist'), //输出目录
        // publicPath: "/assets/",
        filename:'bundle.js' //文件名称
    },
    devServer: { //配置命令参数第二种方式
        open:true, //自动打开浏览器
        port:3000, //设置运行端口
        // contentBase:'src', //指定托管的根目录
        hot:true //启用热更新的第一步
    },
    plugins: [ //配置插件的节点
        new webpack.HotModuleReplacementPlugin(), //第三步
        new htmlWebpackPlugin({ //创建一个在内存中生成html的插件
            template:path.join(__dirname,'./src/index.html'), //指定模版页面，将来会在内存中生成页面
            filename:'index123.html'
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [ //所有第三方模块的匹配规则
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.(jpg|png)$/,use:'url-loader?limit=1000&name=[hash:8]-[name].[ext]'},
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.vue$/,use:'vue-loader'}
        ]
    }
};
//使用webpack-dev-server这个工具实现自动打包编译 监听的是localhost:8080的bundle.js,而不是本地bundle.js
// npm i webpack-dev-server -D 使用这个工具前项目里必须安装webpack和webpack-cli
// 1. npm i webpack -D
// 2. npm i webpack-cli -D