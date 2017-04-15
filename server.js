/**
 * Created by tranquochuy on 4/15/17.
 */
const express = require('express');
const path = require('path');

const app = express();

if (process.env.NODE_ENV !== 'production'){
    const webpackMiddleware = require('webpack-dev-middleware');
    const webpack = require('webpack');
    const webpackConfig=require('./webpack.config');
    app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
    app.use(express.static('dist'));
    app.get('*',(req,res)=>{
        app.sendFile(path.join(__dirname,'dist/index.html'))
    })
}

app.get('/hello',(rep,res)=>{
    res.send('Hello. Wellcome to network monitor.');
});

app.listen(process.env.PORT || 3050,()=>console.log("Listening on port : ",3050));