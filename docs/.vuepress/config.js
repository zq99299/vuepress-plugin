const vuepressPluginBaiduTongjiAnalyticsSC = require('../vuepress-plugin-baidu-tongji-analytics')
const path = require('path')
const vpt = require('../../vuepress-plugin-toolbar')

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
    // [
    //   (pluginOptions, context) => ({
    //     name: 'my-xxx-plugin',
    //     clientRootMixin: path.resolve(__dirname, '../../vuepress-plugin-page-nav2/clientRootMixin.js'),
    //     enhanceAppFiles: path.resolve(__dirname, '../../vuepress-plugin-page-nav2/enhanceAppFile.js'),
    //   })
    // ],
    [vpt, {
      'pageNav': {
        icon: '',
        name: '导航'
      },
      opts: [
        {
          type: 'pageNav', config: {
            icon: '',
            name: ''
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
