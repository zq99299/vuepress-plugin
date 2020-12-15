import Vue from 'vue'
import tags from './tags'

const defaultConfig = {
  type: 'default', // 标签预定义颜色
  color: '#42b983',  // 标签字体颜色
  border: '1px solid #e2faef', // 标签边框颜色
  backgroundColor: '#f0faf5' // 标签边框颜色
}

export default {
  created () {
    this._mrcodeTags = {
      config: Object.assign({}, MRCODE_TAGS, defaultConfig)
    }
  },
  mounted () {
  },
  watch: {
    '$page.path' (val) {
      this.$nextTick(() => {
        this._addTagsToPage()
      })
    },
    '$page.key' (val) {
    }
  },
  updated () {

  },
  methods: {
    _addTagsToPage () {
      const h1s = document.querySelectorAll('.page .content__default h1')
      if (h1s.length == 0) {
        return
      }
      if (!this.$frontmatter.tags) {
        return
      }
      let h1 = h1s[0]
      let Tags = Vue.extend(tags)
      console.log(this)
      let tags1 = new Tags({
        propsData: {
          tags: this.$frontmatter.tags,
          config: this._mrcodeTags.config
        }
      })
      tags1.$mount()

      insterAfter(tags1.$el, h1)
    }
  }
}

function insterAfter (newElement, targetElement) {
  let parent = targetElement.parentNode
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement)
  } else {
    parent.insertBefore(newElement, targetElement.nextSibling)
  }
}
