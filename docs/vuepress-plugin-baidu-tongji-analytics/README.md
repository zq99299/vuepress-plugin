# 百度统计

::: demo
<template>
     <div class="item4">
          <div class="course-content">
            <div class="course-loading-x">
              &nbsp;xxxxxxxxxxxxxxx<img src="http://img.mukewang.com/5453077400015bba00010001.gif" class="course-loading"
                                        alt="加载中...">
            </div>
            <div class="course-fixed-x">
              &nbsp;<div class="course-fixed">
              <a href="http://www.imooc.com/activity/diaocha" class="goto_top_diaocha"></a>
              <a href="http://www.imooc.com/mobile/app" class="goto_top_app"></a>
              <a href="http://www.imooc.com/user/feedback" class="goto_top_feed"></a>
            </div>
            </div>
          </div>
        </div>
</template>

<script>
export default {
    methods: {
        onClick: () => { window.alert(1) },
    },
}
</script>

<style lang="stylus">
.item4 {
      .course-content {
        min-height: 600px;
        background: rgba(1, 8, 5, 0.38);
      }
    // 让加载图片居中
      .course-loading-x {
        text-align center // 最主要的是这个，让文字图片居中，但是图片可不是绝对居中的，因为有宽度，只是让&nbsp;居中
      // 下面的css代码只是让空格微调，不让空格或则里面的字符影响定位
        height 0px
        letter-spacing: -.25em; // 让空白字符间距变小
        overflow: hidden;
        font-size 0px // 演示了让文字不显示
        .course-loading {
          position: absolute; // 使用无依赖绝对定位，会悬空跟随在&nbsp;后面
          margin-left: -26px; // 因为&nbsp;不占用空间，所以是绝对居中的，再把自己便偏移一半的宽度，就绝对居中了
        }
      }
      // 这里还是利用text-align + 目标元素无依赖定位
      .course-fixed-x {
        height: 0;
        text-align: right;
        overflow: hidden;
        .course-fixed {
          display: inline;
          margin-left: 20px;
          position: fixed ; // 这里使用了 fixed 也就是说fixed也有脱离文档流和跟随的特性
          bottom: 100px;
        }
      }
      // 下面的代码是对这个悬浮框内容的定制和定位无关
      .goto_top_diaocha, .goto_top_app, .goto_top_feed { display: block; width: 48px; height: 48px; margin-top: 10px; background: url(http://img.mukewang.com/5453076e0001869c01920098.png) no-repeat; }
      .goto_top_diaocha { background-position: -48px 0; }
      .goto_top_diaocha:hover { background-position: -48px -50px; }
      .goto_top_app { background-position: -96px 0; }
      .goto_top_app:hover { background-position: -96px -50px; }
      .goto_top_feed { background-position: -144px 0; }
      .goto_top_feed:hover { background-position: -144px -50px; }
    }
</style>
:::
