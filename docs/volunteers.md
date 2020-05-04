# 招募志愿者

由于本人是后端 JAVA 开发，对前端不是很深入，很多东西无能为力。

所以本插件系列项目，需要招募一些前端同志进行优化。比如样式、新增功能。

## 发开调试方式

vuepress-plugin 仓库是插件说明（使用 vuepress 写的文档说明） + 插件源码同时在一个仓库，方便直接引用插件进行调试

1. clone https://github.com/zq99299/vuepress-plugin.git 该项目

   该项目目录下以  `vuepress-plugin- ` 开头的每个独立的插件，docs 目录下就是本文档了

2. 调试插件

   引用插件是在 `docs/.vuepress/config.js` 文件中配置的，比如要调试一个插件：

   ```javascript
     plugins: [
       [require('../../vuepress-plugin-toolbar'), {
         'pageNav': {    // 这里是插件配置入口，这里修改是需要重新启动预览项目的
           name: '导航'
         }
        }
       ]
    ]
   ```

   这样引入之后，由于该插件可能有自己的依赖包，所以还需要手动的执行 `yarn add ./vuepress-plugin-toolbar` 将他安装到我们的文档项目中，这一步主要是安装它的依赖。

   做完准备之后，就可以使用 `yarn docs:dev` 运行文档项目了。

   这样调试插件的好处是：可以热更新，类似我们平时开发项目一样的效果

   

## 目前还需要优化的项目

 ### vuepress-plugin-toolbar 侧边工具栏

1. pagNav 页内导航：需要优化的点有：
   1. 导航列表渲染样式现在太丑了，需要优化
   2. 考虑把导航列表做成可折叠的
2. vuepress-plugin-toolbar 插件整体的样式布局，现在感觉都比较不优雅，希望可以重构样式布局
3. opts 中 type=image 不支持本地图片：如果能支持本地图片就好了



