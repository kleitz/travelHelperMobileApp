const webpack = require('webpack');
const path = require('path');
module.exports=
{
    entry:
    {
        index:'./JS/index.tsx',
       // layout:'./JS/layout.tsx',
        //mapData:'./JS/mapData.tsx',
        //login:'./JS/login.tsx',
        //app:'./JS/app.tsx',
        //404:'./JS/404.tsx',
    },
    output:
    {
        path: path.resolve(__dirname, 'Build/JS'),
        filename:'[name].js',
    },
    devtool: "source-map",
    module:
    {
        rules:
        [
            {test:/\.js$/,enforce:"pre",use:['source-map-loader']},
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.scss$/,use:["style-loader","css-loader", "sass-loader"]},
            {test:/\.tsx?$/,use:['ts-loader'/*,'awesome-typescript-loader'*/]}
        ]
    },
    plugins:    
    [
        new webpack.optimize.CommonsChunkPlugin("common"),
        new webpack.LoaderOptionsPlugin({minimize: true}),
    ],
    resolve:
    {
        extensions:[".js",".jsx",".css",".scss",".ts",".tsx"]
    },
   /* externals: 
    {
        "react": "React",
        "react-dom": "ReactDOM"
    }*/
}