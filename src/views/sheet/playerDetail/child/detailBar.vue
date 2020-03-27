<template>
  <div>
    <detail-nav-bar>
      <div slot="center">
        <div class="detail-nav-bar-title">歌单</div>
        <div class="detail-nav-bar-desc">
          编辑推荐：
          <span class="nav-bar-title" v-for="(item,index) in tags" :key="index">{{item}}</span>
        </div>
      </div>
      <div slot="right" class="nav-bar-right">
        <div class="nav-bar-right-01">
          <img class="" src="~assets/img/sheetDetail/search.png" alt="">
        </div>
        <div class="nav-bar-right-02 ">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </detail-nav-bar>
  </div>
</template>

<script>
  import DetailNavBar from "components/content/detailNavBar/DetailNavBar";

  export default {
    name: "detailBar",
    props: {
      tags: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    components: {
      DetailNavBar
    }
  }
</script>

<style scoped>
  .nav-bar-right {
    display: flex;
    align-items: center;
  }

  .detail-nav-bar-title {
    font-size: 22px;
    color: #ffffff;
  }

  .detail-nav-bar-desc {
    font-size: 10px;
    color: var(--color-text-transparency-05);
  }

  .nav-bar-title {
    margin-right: 4px;
  }

  .nav-bar-right-01 {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav-bar-right-02 {
    flex: 1;
    padding-left: 10px;
  }

  .nav-bar-right-01 img {
    width: 26px;
    vertical-align: middle;
    position: relative;
    top: 3px;
  }

  .nav-bar-right-02 span {
    display: block;
    width: 3px;
    height: 3px;
    border-radius: 2px;
    margin-bottom: 3px;
    margin-top: 4px;
    background-color: #ffffff;
  }
</style>
