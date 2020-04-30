const vuepressPluginBaiduTongjiAnalyticsSC = require('../vuepress-plugin-baidu-tongji-analytics')

module.exports = {
  title: 'vuepress-plugin for mrcode',
  description: 'mrcode 的 vuepress-plugin 开发测试说明文档',
  base: '/vuepress-plugin/', // gh-page 中是增加了项目名
  dest: 'build/.vuepress/dist',  // build 时构建的文件放在那里？
  host: 'localhost', // dev 的域名
  port: 8080, // dev 的端口
  markdown: {
    lineNumbers: true
  },
  // theme: 'vue',
  themeConfig: {
    docsDir: 'docs',
    // sidebar: 'auto',
    smoothScroll: true, // 页面滚动效果
    sidebarDepth: 3, // 嵌套标题侧边栏提取深度，最大为 2，会提取到 h3
    lastUpdated: '上次更新: ', // string | boolean
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'https://github.com/zq99299/vuepress-plugin',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: 'GitHub',
    // 以下为可选的编辑链接选项
    // 假如你的文档仓库和项目本身不在一个仓库：
    // docsRepo: 'vuejs/vuepress',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',
    // 主题级别的配置
    serviceWorker: {
      updatePopup: true
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: '百度统计', link: '/vuepress-plugin-baidu-tongji-analytics/' }
    ],
    sidebar: {  // 侧边栏配置，需要展示的侧边栏需要在这里配置
      '/vuepress-plugin-baidu-tongji-analytics/': vuepressPluginBaiduTongjiAnalyticsSC()
    }
  },
  plugins: [
    [require('../../vuepress-plugin-toolbar'), {
      'pageNav': {
        icon: '',
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
            imageUrl: 'data:image/png;base64,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',
            more: {
              newWindow: false,
              link: '/vuepress-plugin/vuepress-plugin-baidu-tongji-analytics/test.html',
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
        }, {
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
            imageUrl: 'https://qq.yh31.com/tp/zjbq/202004222012224866.gif',
          }
        }
      ]
    }],
    ['demo-code', {
      cssLibs: [
        'https://unpkg.com/animate.css@3.7.0/animate.min.css',
      ],
      showText: 'show more',
      hideText: 'hide',
    }],
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        message: '有新内容',
        buttonText: '立即获取新内容'
      }
    }],
    ['@vuepress/medium-zoom', {
      selector: '.theme-default-content img'
    }],
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    ['vuepress-plugin-code-copy', true],
    ['@vuepress/last-updated', {
      transformer: (timestamp, lang) => {
        // 不要忘了安装 moment
        const moment = require('moment')
        moment.locale(lang)
        return moment(timestamp).fromNow()
      }
    }
    ]
  ]
}
