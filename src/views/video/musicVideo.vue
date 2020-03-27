<template>
    <div class="video">

    </div>
</template>

<script>
  import {getGroupList} from "network/video"
    export default {
        name: "video",
      data(){
          return {
            groupList:{}
          }
      },
      mounted() {
          getGroupList().then(res=>{
            console.log(res);
          })
      }
    }
</script>

<style scoped>

</style>
