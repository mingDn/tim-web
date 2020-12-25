const webpack = require('webpack')

module.exports = {
    //引入jquery
    chainWebpack: config => {
        config.plugin('provide').use(webpack.ProvidePlugin, [{
            $: 'jquery',
            jquery: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }])
    },

    //配置axios跨域请求
    devServer: {
        proxy: {
            '/tim': {
                target: 'http://localhost:8088', //代理接口
                changeOrigin: true, //设置是否跨域
                ws: true,
                pathRewrite: { //访问路径重写
                    '^/tim': ''
                }
            }
        }
    }
}
