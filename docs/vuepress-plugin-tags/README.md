---
tags:
  - 测试标签一
  - 测试标签二
  - 测试标签三
  - 测试标签四
  - 测试标签 5
  - 测试标签 6
  - 测试标签 7
  - 测试标签 8
  - 测试标签 9
  - 测试标签 10
  - 测试标签 11
  - 测试标签 12
---

# vuepress-plugin-tags

适用于 [vuepress](https://vuepress.vuejs.org/zh/plugin/using-a-plugin.html) 插件的插件

提供的功能：可以在标题下面显示标签，如下所示

![image-1](./docs/assets/1.png)

当然这需要你的这个页面顶部有 [Front Matter](https://vuepress.vuejs.org/zh/guide/frontmatter.html#front-matter),
本插件使用了官方预定义的 [内置搜索中的 `tags`](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E5%86%85%E7%BD%AE%E6%90%9C%E7%B4%A2)
来渲染，这有两个好处：

1. 本来你为了搜索而设置了标签
2. 当你搜索到当前页时，不能一目了然的清除，我为什么会被导航到这个页面来？

当使用本插件显示标签，以上的问题，就很好的被结合了。

那么上图的 Front Matter 对应如下

```
---
tags:
  - 异步复制
  - 半同步复制
  - rpl_semi_sync_master_wait_no_slave
  - rpl_semi_sync_master_wait_point
---
```

## Install

```bash
yarn add vuepress-plugin-tags
# OR 
npm install vuepress-plugin-tags
```

> open npm : https://www.npmjs.com/package/vuepress-plugin-tags

## Usage

```javascript
module.exports = {
  "plugins": [
    ["vuepress-plugin-tags"]
  ]
}
```

## 详细配置参数

```javascript
module.exports = {
  "plugins": [
    ["vuepress-plugin-tags", {
      type: 'default', // 标签类型
      color: '#42b983',  // 标签字体颜色
      border: '1px solid #e2faef', // 标签边框颜色
      backgroundColor: '#f0faf5' // 标签边框颜色
    }]
  ]
}
```

上述配置中的 color、border、backgroundColor 只在 type=default 时生效。

type 有如下的选项：

- default 默认主题，与 vuepress 官方默认主题颜色一致；其他的 5 个则是不同的语义主题
- primary
- success
- info
- warning
- danger

其他 5 个 type 的样式如下

![image-2](./docs/assets/2.png)
