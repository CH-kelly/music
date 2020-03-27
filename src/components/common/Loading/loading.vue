<template>
  <div class="loading">
    <div v-show="show" class="zh-load-mark">
      <div class="zh-load-box">
        <div class="zh-loading">
          <div class="loading_leaf loading_leaf_0"></div>
          <div class="loading_leaf loading_leaf_1"></div>
          <div class="loading_leaf loading_leaf_2"></div>
          <div class="loading_leaf loading_leaf_3"></div>
          <div class="loading_leaf loading_leaf_4"></div>
          <div class="loading_leaf loading_leaf_5"></div>
          <div class="loading_leaf loading_leaf_6"></div>
          <div class="loading_leaf loading_leaf_7"></div>
          <div class="loading_leaf loading_leaf_8"></div>
          <div class="loading_leaf loading_leaf_9"></div>
          <div class="loading_leaf loading_leaf_10"></div>
          <div class="loading_leaf loading_leaf_11"></div>
        </div>
        <div class="zh-load-cont">
          {{message}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        show: true,
        message: '正在加载中...'
      }
    },
    methods: {
      show(message = '添加成功', time = 1500) {
        this.message = message;
        this.isShow = true;
        setTimeout(() => {
          this.message = '';
          this.isShow = false;
        }, time)
      }
    }
  }
</script>

<style scoped>

</style>
