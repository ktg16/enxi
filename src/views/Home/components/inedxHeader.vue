<template>
  <div>
      <div class="containe">
        <div class="registration">挂号</div>
        <div class="patientname">
          患者姓名
          <input type="text" placeholder="请输入姓名" class="patient" />
        </div>
        
      
        <div class="button">
          <v-btn x-small text color="primary" >挂号</v-btn>
          <v-btn x-small text color="primary" @click="overlay = !overlay">新建</v-btn>
          <!-- <button>挂号</button> -->
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'indexHeader'
}
</script>
<style  scoped>
.background /deep/ .v-btn {
  font-size: 12px;
  /* padding: 30px; */
}
</style>
<style lang="scss" scoped>
// @import "~@/assets/styles/mixins.scss";
.containe {
  width: 100%;
  height: 40px;
  padding-top: 10px;
  display: flex;
  justify-content: space-around;
  background: #fff;
  .patient {
    border: 1px solid #999;
    border-radius: 5px;
    padding: 0 8px;
    outline: none;
  }
  .patientname{
    padding: 2px 0;
  }
  .registration{
    font-size: 14px;
  }
}
</style>