<template>
  <div class="box">
    <div class="warp">
      <div class="opt">
        导航水准
        <div class="pree">
            xxx
        </div>
      </div>
      <div class="opt">
        导航
        <div class="pree">
          xxx
        </div>
      </div>
      <div class="opt">
        导航
        <div class="pree">
          xxx
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'demo'
  }
</script>

<style lang="stylus" scoped>
  .box{
    position fixed
    width: 3.8rem;
    top: 3.6rem;
    right: 0;
    box-sizing: border-box;
    .warp{
      width 64px
      border 1 solid #dd
    }
    .opt{
      border-top: 1px solid #eee;
      font-size: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #eee;
      border-left: 1px solid #eee;
      border-right: 1px solid #eee;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .05);
      background-color: #fff;
      height: 60px;
      cursor: pointer;
      .pree{
        display none
        width 268px
        height 268px
        position absolute
        background red
        right: 64px;
      }
      &:hover {
        .pree {
          display  block
        }
      }
    }
  }
</style>