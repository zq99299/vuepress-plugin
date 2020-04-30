<template>
  <aside class="me-toolbar-sidebar">
<!--    <div class="option-box">-->
<!--      <i class="iconfont icon-daohang"></i>-->
<!--      导航-->
<!--      <div class="popover">-->
<!--        xxxxx-->
<!--      </div>-->
<!--    </div>-->
    <!--    <div class="option-box">-->
    <!--      导航-->
    <!--      <div class="toc-container">-->
    <!--        xxxxxxxxx-->
    <!--      </div>-->
    <!--    </div>-->
    <!--    <div class="option-box">-->
    <!--      导航-->
    <!--      <div class="toc-container">-->
    <!--        xxxxxxxxx-->
    <!--      </div>-->
    <!--    </div>-->
    <!--    <div class="option-box">-->
    <!--      导航-->
    <!--      <div class="toc-container">-->
    <!--        xxxxxxxxx-->
    <!--      </div>-->
    <!--    </div>-->
    <!--    <div class="option-box">-->
    <!--      导航-->
    <!--      <div class="toc-container">-->
    <!--        xxxxxxxxx-->
    <!--      </div>-->
    <!--    </div>-->
    <!--    <div class="option-box">-->
    <!--      导航-->
    <!--      <div class="toc-container">-->
    <!--        xxxxxxxxx-->
    <!--      </div>-->
    <!--    </div>-->
    <!--    <div class="option-box">-->
    <!--      导航-->
    <!--      <div class="toc-container">-->
    <!--        xxxxxxxxx-->
    <!--      </div>-->
    <!--    </div>-->
  </aside>
</template>

<script>
  export default {}
</script>

<style lang="stylus" scoped>
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
        position: fixed; // 这里使用了 fixed 也就是说fixed也有脱离文档流和跟随的特性
        bottom: 100px;
      }
    }

    // 下面的代码是对这个悬浮框内容的定制和定位无关

    .goto_top_diaocha, .goto_top_app, .goto_top_feed {
      display: block;
      width: 48px;
      height: 48px;
      margin-top: 10px;
      background: url(http://img.mukewang.com/5453076e0001869c01920098.png) no-repeat;
    }

    .goto_top_diaocha {
      background-position: -48px 0;
    }

    .goto_top_diaocha:hover {
      background-position: -48px -50px;
    }

    .goto_top_app {
      background-position: -96px 0;
    }

    .goto_top_app:hover {
      background-position: -96px -50px;
    }

    .goto_top_feed {
      background-position: -144px 0;
    }

    .goto_top_feed:hover {
      background-position: -144px -50px;
    }
  }
</style>
