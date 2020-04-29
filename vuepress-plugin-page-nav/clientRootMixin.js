import PageNav from './PageNav.vue'
import Vue from 'vue'
import PageAsidebar from './PageAsidebar'

export default {
  created () {
    this._mrcodePageNav = {
      init: false,
      pageAsidebar: null,
      navComment: null
    }
  },
  mounted () {
    setTimeout(() => {
      this.init()
    }, 300)
  },
  watch: {
    '$page.path' (val) {
    },
    '$page.key' (val) {
      if (this._mrcodePageNav.navComment) {
        this._mrcodePageNav.navComment.pageKey = val
        this._mrcodePageNav.navComment.pageObject = this.$page
      }
    }
  },
  updated () {
  },
  methods: {
    init () {
      this.pageAsidebarInsert()
      // 如果没有初始化
      if (!this._mrcodePageNav.init) {
        let pageAsidebar = this._mrcodePageNav.pageAsidebar
        const PageNavObj = Vue.extend(PageNav)
        const pageNavObjIns = new PageNavObj()
        pageNavObjIns._parent = pageAsidebar.$el
        pageNavObjIns.$mount()
        pageNavObjIns.pageObject = this.$page
        pageAsidebar.$el.appendChild(pageNavObjIns.$el)
        this._mrcodePageNav.navComment = pageNavObjIns
        this._mrcodePageNav.init = true
      }
    },
    pageAsidebarInsert () {
      if (this._mrcodePageNav.pageAsidebar) {
        return
      }
      const containers = document.querySelectorAll('.theme-container')
      let container = null
      if (containers && containers.length > 0) {
        container = containers[0]
      }
      if (!container) {
        return
      }
      const PageAsidebarObj = Vue.extend(PageAsidebar)
      const pageAsidebarObjIns = new PageAsidebarObj()
      pageAsidebarObjIns._parent = container
      pageAsidebarObjIns.$mount()
      container.appendChild(pageAsidebarObjIns.$el)
      this._mrcodePageNav.pageAsidebar = pageAsidebarObjIns
    }
  }
}
