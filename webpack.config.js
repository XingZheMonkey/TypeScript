const path  = require('path')
const htmlWebapckPlugin = require('html-webpack-plugin') 
const env = process.env.NODE_ENV == 'pro' ? 'production' : 'development'

module.exports = {
    mode:env,
    entry:'/src/js/main.ts',
    output:{
        filename:'js/[name].[contenthash:10].js',
        path:path.resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins:[
        new htmlWebapckPlugin({
            template:'./src/index.html'
        })
    ],
    resolve:{
        extensions:['.js','.ts']
    },
    devServer:{
        hot:true,
        port:4500
    }
    
}