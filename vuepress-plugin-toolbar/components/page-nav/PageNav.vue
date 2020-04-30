<template>
  <div class="option-box" v-bind:style="styleObject">
    <i v-if="icon" :class="icon"></i>
    <span v-if="name">{{name}}</span>
    <div class="popover">
      <page-nav-item :menus="headers"></page-nav-item>
    </div>
  </div>
</template>

<script>
  import PageNavItem from './PageNavItem'

  const DEFAULG_CONFIG = {
    icon: 'iconfont icon-daohang',
    name: '导航',
  }
  export default {
    components: { PageNavItem },
    props: {
      config: {},
      pageObject: {},
      pageKey: {},
    },
    data () {
      return {
        styleObject: {
          display: undefined
        },
        icon: undefined,
        name: undefined,
        isClose: false,  // 导航按钮是否显示
        headers: []
      }
    },
    created () {
      let config = DEFAULG_CONFIG
      if (this.config) {
        config = Object.assign(DEFAULG_CONFIG, config)
      }
      this.icon = config.icon
      this.name = config.name
    },
    methods: {
      build () {
        let headerLins = document.querySelectorAll('.page .content__default .header-anchor')
        if (headerLins && headerLins.length != 0) {
          let headers = []
          let h1Node = null
          let h2Node = null
          let h3Node = null
          let h4Node = null
          let h5Node = null
          let h6Node = null
          headerLins.forEach(item => {
            let tagName = item.parentElement.tagName.toLowerCase()
            let level = parseInt(tagName.substr(1))
            let node = {
              path: item.pathname + item.hash,
              name: item.nextSibling.data,
              level: level,
              childs: []
            }
            switch (level) {
              case 1:
                h1Node = node
                headers.push(node)
                break
              case 2:
                h1Node.childs.push(node)
                h2Node = node
                break
              case 3:
                h2Node.childs.push(node)
                h3Node = node
                break
              case 4:
                h3Node.childs.push(node)
                h4Node = node
                break
              case 5:
                h4Node.childs.push(node)
                h5Node = node
                break
              case 6:
                h5Node.childs.push(node)
                h6Node = node
                break
            }
          })
          // console.log(headers)
          this.headers = headers
        }
      }
    },
    watch: {
      pageKey (val) {
      },
      pageObject (val) {
        if ('/' == val.path) {
          console.log('none')
          this.styleObject.display = 'none'
          return
        }
        this.styleObject.display = undefined
        this.$nextTick(() => {
          this.build()
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .close {
    display none !important
  }
</style>
