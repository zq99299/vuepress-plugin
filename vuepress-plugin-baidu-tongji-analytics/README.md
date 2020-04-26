# vuepress-plugin-baidu-tongji-analytics

适用于 [vuepress](https://vuepress.vuejs.org/zh/plugin/using-a-plugin.html) 的百度统计分析插件

## Install

```bash
yarn add vuepress-plugin-baidu-tongji-analytics
# OR 
npm install vuepress-plugin-baidu-tongji-analytics
```

> open npm : https://www.npmjs.com/package/vuepress-plugin-baidu-tongji-analytics

## Usage

```javascript
module.exports = {
  plugins: [
    ['vuepress-plugin-baidu-tongji-analytics', {
      key: 'xxxxx'
    }]
  ]
}
```

## Options
- key: 在百度统计中心申请的 key
    - Type: string
    - Default: undefined
    
    ![image-baidukey](./docs/assets/image-baidukey.png)

- open: 是否打开统计功能
    - Type: boolean
    - Default: true
    
- dev: 是否在开发模式下生效
    - Type: boolean
    - Default: false
    
    想在你本地预览笔记的时候也生效统计功能，则设置为 true

