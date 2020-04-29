<template>
  <div class="option-box">
    <div @click="menuNavOpen = true">导航</div>
    <div class="toc-container">
      <div class="pos-box">
        <div class="scroll-box" style="max-height:550px">
          <menu-nav :menus="headers"></menu-nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import menuNav from './menuNav'
  import PageAsidebar from './PageAsidebar'

  export default {
    name: 'menu.vue',
    components: { menuNav },
    props: {
      pageObject: {},
      pageKey: {}
    },
    data () {
      return {
        msg: '默认信息',
        headers: [],
        menuNavOpen: false
      }
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
          console.log(headers)
          this.headers = headers
        }
      }
    },
    watch: {
      pageKey (val) {
        if (val == this.rootPageKey) {
          this.msg = '首页'
          return
        }
        this.msg = val
        console.log(val)
      },
      pageObject (val) {
        this.$nextTick(() => {
          this.build()
        })
      },
      menuNavOpen (val) {
        this.$refs.menuNav.style.display = val ? '' : 'none'
      }
    }
  }
</script>

<style scoped>
  .hidden-btn {
    width: 50px;
    z-index: 1;
    position: fixed;
    background: #eaecef;
  }

  .menu-nav {
    position: fixed;
    font-size: 16px;
    background-color: #fff;
    width: 20rem;
    margin: 0;
    top: 3.6rem;
    right: 0;
    bottom: 0;
    box-sizing: border-box;
    border-right: 1px solid #eaecef;
    z-index: 600;
    overflow-y: auto;
  }
</style>
