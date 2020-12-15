---
tags:
  - 安装依赖
  - 配置插件
  - 本标签信息由：标签插件生成
---

# vuepress-plugin-toolbar 侧边工具栏
提供的功能：在右侧侧边栏出现自定义的展示区域。如下图所示

![image-20200504162559224](./assets/image-20200504162559224.png)

目前提供了上图所示的几种自定义功能。下面详细讲解怎么配置

## 安装依赖

```bash
yarn add vuepress-plugin-toolbar
# OR 
npm install vuepress-plugin-toolbar
```

## 配置插件

下面的配置就是本页右侧显示配置的效果，按照你自己的需求配置。

```javascript
module.exports = {
  plugins: [
    ['vuepress-plugin-toolbar'], {
      'pageNav': {
        name: '导航'
      },
      opts: [
        {
          icon: '',
          name: '二维码',
          link: '',
          popover: {
            title: '使用 Base64 来作为图片源',
            type: 'image',
            imageUrl: 'data:image/png;base64,这里是 Base64图片编码代码作为图片源',
            more: {
              newWindow: false,
              link: '/vuepress-plugin/vuepress-plugin-toolbar/',
              name: '了解更多'
            }
          }
        }, {
          icon: '',
          name: '纯展示'
        },
        {
          icon: '',
          name: '文本',
          popover: {
            type: 'text',
            title: '纯文本说明',
            text: '这是一个纯文本的内容展示，就是一段话'
          }
        },
        {
          icon: '',
          name: 'html 支持',
          popover: {
            type: 'html',
            title: '使用简单的 HTML 显示',
            html: '<h1>使用简单的 HTML</h1> 进行展示 <a href="http://www.baidu.com"> 链接到百度 </a>'
          }
        }, {
          icon: '',
          name: '网络图片',
          link: '',
          popover: {
            title: '使用 网络图片 来作为图片源',
            type: 'image',
            imageUrl: 'http://img.bjtata.com/img/5c5de63193ea53a4.jpg',
          }
        }
      ]
    }]
}
```

目前提供了两种功能：

1. 页面内完整的导航

   当前页面所有的 H1~H6 标签的标题都会提取出来，作为导航列表展示，比左侧官网自带的更全

2. 自定义展示内容：支持以下几种

   1. image ：图片，显示一张图片，比如二维码
   2. text：文字，使用一段文字描述
   3. html：自己用一些简单的 html 拼接的描述

下面分别详细讲解每种功能的配置

### 页内导航 pageNav

```json
'pageNav': {
  icon: '',
  name: '导航'
}
```

- icon：图标 class 名称

	- Type: string
	
	- Default: 'iconfont icon-daohang'
	
	所有功能都支持该属性配置，该属性的 class 名称，必须是你项目中有的 css 名称。目前内置了一个图标。
	
- name：在图标下面显示的文字，建议最长 4 个汉字

  - Type: string
  - Default: '导航'

  所有功能都支持该属性配置



### 自定义展示内容 opts

目前可自定义的内容有以下类型：

1. image ：图片，显示一张图片，比如二维码
2. text：文字，使用一段文字描述
3. html：自己用一些简单的 html 拼接的描述

以上三种都有的配置属性有如下，在下面配置注释的是每种类型特有的配置

```json
{
  icon: '',
  name: '',
  link: '',
  popover: {
    title: '',
    type: 'image',
    imageUrl:'',   // type 是 image 的时候配置图片路径
    text:'',   // type 是 text 的时候配置文字描述
    html:'',   // type 是 html 的时候配置 html 片段代码
    more: {
      newWindow: false,
      link: '',
      name: ''
    }
  }
}
```
- icon：图标 class 名称

  -  Type: string
  -  Default: undefined

- name：图标下显示的文字，建议最长 4 个汉字
  
  - Type: string
  - Default: undefined
  
- link：点击这个展示项的时候，是否跳转

  - Type: string
  - Default: undefined
  
- popover：鼠标移动到图标上，是否显示更详细的信息？

  - Type: Object
  - Default: undefined
  

下面是 popover 的配置属性说明：

- title：显示这里配置的标题

  - Type: string
  - Default: undefined
- type：详细信息里面显示的是那种类型的信息？可选配置有 image、text、html

  - Type: string
  - Default: undefined
- more：是否显示更多按钮
  
   - Type: Object
   - Default：undefined

下面是 more 的配置属性说明

- newWindow：链接调转的时候，是否打开新窗口跳转
  
  - Type: Boolean
  - Default: false
- link：跳转地址

  - Type: String
  - Default: undefined
- name：按钮名称

  - Type: Boolean
  - Default: undefined

