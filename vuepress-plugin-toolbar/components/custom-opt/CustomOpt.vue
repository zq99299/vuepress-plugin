<template>
  <div class="custom-opt option-box">
    <i v-if="icon" :class="icon"></i>
    <span v-if="name">{{name}}</span>
    <div class="popover" v-if="popover">
      <div class="title" v-if="popover.title">{{popover.title}}</div>
      <hr>
      <div class="content">
        <template v-if="popover.type == 'image'">
          <img width="100%" :src="popover.imageUrl">
        </template>
        <template v-if="popover.type == 'text'">
          {{popover.text}}
        </template>
        <template v-if="popover.type == 'html'">
          <span v-html="popover.html"></span>
        </template>
      </div>
      <a class="more-btn"
         v-if="popover.more"
         :target="popover.newWindow ? '_blank':''"
         :href="popover.more.link">
        {{popover.more.name}}
      </a>
    </div>
  </div>
</template>

<script>
  const DEFAULG_CONFIG = {
    icon: '',
    name: '自定义',
    link: null,
    popover: null
  }
  // 弹框定义
  const DEFAULT_CONFIG_POPOVER = { // 为空，则不显示弹框
    type: 'text', // 弹出类型： image、text、html
    title: null, // 是否显示标题
    imageUrl: null, // image: 地址
    text: '', // text： 文字描述
    html: '', // 显示一段 html
    more: null // 是否显示更多按钮，可以跳出页面
  }
  const DEFAULT_CONFIG_POPOVER_MORE = {  // 是否显示更多按钮，可以跳出页面
    name: 'more',
    link: null
  }
  export default {
    props: {
      config: {}
    },
    data () {
      return {
        icon: undefined,
        name: undefined,
        popover: undefined
      }
    },
    created () {
      let config = DEFAULG_CONFIG
      if (this.config) {
        config = Object.assign({}, DEFAULG_CONFIG, this.config)
      }
      this.icon = config.icon
      this.name = config.name
      if (config.popover) {
        this.popover = Object.assign({}, DEFAULT_CONFIG_POPOVER, this.config.popover)
        if (config.popover.more) {
          this.popover.more = Object.assign({}, DEFAULT_CONFIG_POPOVER_MORE, this.config.popover.more)
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
