1.全局下载vue-cli
    npm install vue-cli -g
2.初始化一个工程包
    vue init webpack vue-cli-demo
    按照需求配置

package.json

3.启动服务
    npm run dev
    或 npm start
4.打包服务
    npm run build

5.打包依赖
    dependencies  目录会被一起打包发布

6.开发依赖
    devDependencies  仅在开发阶段使用，不会被打包发布，但使用时需要install

模块化
    import export

export default 导出一个默认对象  对应的导入  import xxx from xx
export 导出一个对象   对应的导入  import {xxx} from xx






启动工程
    安装依赖包  npm installl
    启动  npm start