##2017-5-24
1. 图片文件路径问题：
html文件的img标签直接从src路径开始引用 src/images/logo.jpg
   
##2017-5-25
2. 安装node-sass
    更新node到最新版本，然后按照 https://github.com/sass/node-sass/blob/master/TROUBLESHOOTING.md
    npm cache clean  //清除缓存
    npm install -ddd node-sass > npm.log 2> npm.err  //安装最新版本的node-sass
    npm ls node-sass    //查看安装好的版本信息

3. 运行时的端口已经被占用，使用 ng serve --port 4500 修改运行的端口号

4. 安装angular-animation模块 https://material.angular.io/guide/getting-started
    npm install --save-dev @angular/animations
    
5. 更改样式文件默认文件名，创建项目时使用
    ng new shopping --style scss