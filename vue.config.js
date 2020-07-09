const path = require('path')

module.exports = {
    publicPath: '/', // 基本路径
    outputDir: 'dist', // 输出文件目录
    lintOnSave: true, // eslint-loader 是否在保存的时候检查
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            config.mode = 'production';
        } else {
            // 为开发环境修改配置...
            config.mode = 'development';
        }
        Object.assign(config, {
            // 开发生产共同配置
            resolve: {
                alias: {
                    'assets' : '@/assets',
                    'components' : '@/components',
                    '@': path.resolve(__dirname, './src')
                    // '@c': path.resolve(__dirname, './src/components')
                } // 别名配置
            },
            // externals: {
            //     'AMap': 'AMap',
            //     'AMapUI': 'AMapUI'
            // }
        })
    },
    productionSourceMap: true, // 生产环境是否生成 sourceMap 文件
    // css相关配置
    // css: {
    //     extract: false, // 是否使用css分离插件 ExtractTextPlugin
    //     sourceMap: true, // 开启 CSS source maps?
    //     loaderOptions: {
    //         css: {}, // 这里的选项会传递给 css-loader
    //         less: {
    //           javascriptEnabled: true
    //         } // 这里的选项会传递给 postcss-loader
    //     }, // css预设器配置项 详见https://cli.vuejs.org/zh/config/#css-loaderoptions
    //     modules: false // 启用 CSS modules for all css / pre-processor files.
    // },
    // webpack-dev-server 相关配置
    // devServer: {
    //     // open: process.platform === 'darwin',
    //     // host: '0.0.0.0', // 允许外部ip访问
    //     port: 8022, // 端口
    //     https: false, // 启用https
    //     disableHostCheck: true,
    //     overlay: {
    //         warnings: true,
    //         errors: true
    //     }, // 错误、警告在页面弹出
    //     // proxy: {
    //     //     '/': {
    //     //         target: 'http://119.23.213.249:80',
    //     //         changeOrigin: true, // 允许websockets跨域
    //     //         // ws: true,
    //     //         // pathRewrite: {31.246
    //     //         //     '^/api': ''
    //     //         // }
    //     //     }
    //     // } // 代理转发配置，用于调试环境
    // },
    // 第三方插件配置
    pluginOptions: {}
}