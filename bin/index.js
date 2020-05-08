#!/usr/bin/env node
const process = require("process");
const fs = require('fs');
const path = require('path');
const webpackConfig = require('../config/webpackConfig');
const webpackProdConfig = require('../config/webpackProdConfig');
const babelrc = require('../config/babelConfig');
const indexHtml = require('../template/index-html');
const indexFile = require('../template/index');
const app = require('../template/app');
const packageJson = require('../template/package-json');
const yarnLock = require('../template/yarn-lock');
const dest = process.cwd();
const fileName = process.argv[2];
const fileDest = path.resolve(dest,fileName);
fs.mkdir(fileDest,function(){
    fs.writeFile(path.resolve(fileDest,'webpack.config.js'),webpackConfig,function(err){if(err){throw err};});
    fs.writeFile(path.resolve(fileDest,'webpack.prod.config.js'),webpackProdConfig,function(err){if(err){throw err};});
    fs.writeFile(path.resolve(fileDest,'.babelrc'),babelrc,function(err){if(err){throw err};});
    fs.writeFile(path.resolve(fileDest,'package.json'),packageJson,function(err){if(err){throw err};});
    fs.writeFile(path.resolve(fileDest,'yarn.lock'),yarnLock,function(err){if(err){throw err};});
    fs.mkdir(path.resolve(fileDest,'src'),function(){
        fs.writeFile(path.resolve(fileDest,'src/index.html'),indexHtml,function(err){if(err){throw err};});
        fs.writeFile(path.resolve(fileDest,'src/index.js'),indexFile,function(err){if(err){throw err};});
        fs.writeFile(path.resolve(fileDest,'src/App.js'),app,function(err){if(err){throw err};});
        fs.writeFile(path.resolve(fileDest,'src/index.css'),'',function(err){if(err){throw err};});
    });   
});




