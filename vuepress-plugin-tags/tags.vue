<template>
  <div>
    <span v-for="(item,index) in tags"
          class="tag"
          :class="classObject(index)"
          :style="styleObject"
    >
      {{ item }}
    </span>
  </div>
</template>

<script>
/**
 * 使用预定于的变量，构建当前文章的标签列表
 * https://vuepress.vuejs.org/zh/guide/frontmatter.html#%E5%85%B6%E4%BB%96%E6%A0%BC%E5%BC%8F%E7%9A%84-front-matter
 */
export default {
  props: {
    tags: {
      type: Array,
      default: []
    },
    config: {
      type: Object,
      default: {
        type: 'default', // 标签预定义颜色
        color: '#42b983',  // 标签字体颜色
        border: '1px solid #e2faef' // 标签边框颜色
      }
    }
  },
  created () {
    this.styleObject.color
  },
  data () {
    return {}
  },
  methods: {
    classObject (index) {
      let configType = this.config.type
      return {
        'not-first': index === 0,
        'tag--primary': 'primary' === configType,
        'tag--success': 'success' === configType,
        'tag--info': 'info' === configType,
        'tag--warning': 'warning' === configType,
        'tag--danger': 'danger' === configType
      }
    }
  },
  mounted () {
  },
  computed: {
    styleObject () {
      if (this.config.type === 'default') {
        return {
          color: this.config.color,
          border: this.config.border,
          'background-color': this.config.backgroundColor
        }
      }
      return {}
    }
  }
}
</script>

<style scoped lang="stylus">
.tag {
  background-color: #f0faf5;
  display: inline-block;
  height: 32px;
  padding: 0 10px;
  line-height: 30px;
  font-size: 12px;
  color: #42b983;
  border: 1px solid #e2faef;
  border-radius: 4px;
  box-sizing: border-box;
  white-space: nowrap;
  margin-left: 10px;
  margin-top: 5px;
}

.not-first {
  margin-left: 0px;
}

.tag.tag--primary {
  background-color: #ecf5ff;
  color: #409eff;
  border: 1px solid #d9ecff;
}

.tag.tag--success {
  background-color: #f0f9eb;
  border-color: #e1f3d8;
  color: #67c23a;
}

.tag.tag--info {
  background-color: #f4f4f5;
  border-color: #e9e9eb;
  color: #909399;
}

.tag.tag--warning {
  background-color: #fdf6ec;
  border-color: #faecd8;
  color: #e6a23c;
}

.tag.tag--danger {
  background-color: #fef0f0;
  border-color: #fde2e2;
  color: #f56c6c;
}
</style>
