# ding-ding

> 叮叮快修官方网站

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
# 配置修改
C:\github\ding-ding\build\webpack.base.conf.js

这个文件的第31-39行关于eslint的配置被注释掉了，开发完要启动优化代码
# 动画库修改
C:\github\ding-ding\index.html

这个文件引用的动画库是非压缩版本，开发完要换成压缩版本。
# 端口号
d-d/config/index.js 30行

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
