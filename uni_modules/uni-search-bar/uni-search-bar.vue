<template>
<view>
  <input type="text" @input="input">
</view>
</template>

<script>
  export default {
    name:"uni-search-bar",
    props: {
      radius: {
        type: Number,
        default:100
      },
      cancelButton: {
        type: String,
        default: "none"
      }
    },
    data() {
      return {
            show: true,
            showSync: true,  
      };
    },
  
    methods: {
      input(e) {
        uni.$emit("input", e)
      },
  }
</script>

<style lang="scss">
.uni-searchbar {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  position: relative;
  padding: 16rpx;
  /* 将默认的 #FFFFFF 改为 #C00000 */
  background-color: #c00000;
}
.search-box {
  position: sticky;
  top: 0;
  z-index: 999;
}
.sugg-list {
  padding: 0 5px;

  .sugg-item {
    font-size: 12px;
    padding: 13px 0;
    border-bottom: 1px solid #efefef;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .goods-name {
      // 文字不允许换行（单行文本）
      white-space: nowrap;
      // 溢出部分隐藏
      overflow: hidden;
      // 文本溢出后，使用 ... 代替
      text-overflow: ellipsis;
      margin-right: 3px;
    }
  }
  }
</style>