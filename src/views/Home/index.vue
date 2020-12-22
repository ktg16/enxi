<template>
  <v-app>
    <div class="background">
      <div class="containe">
        <div class="registration">挂号</div>
        <div class="patientname">
          患者姓名
          <input type="text" placeholder="请输入姓名" class="patient" />
        </div>
        <div class="button">
          <v-btn large text color="primary">挂号</v-btn>
          <v-btn large text color="primary">新建</v-btn>
        </div>
      </div>
      <div class="content"></div>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style  scoped>
.button /deep/ .v-btn {
  font-size: 25px;
  padding: 30px;
}
</style>

<style lang="scss" scoped>
// $color-pack: false;
//   @import '~vuetify/src/styles/main.sass';
.background {
  width: 100%;
  height: 100%;
  background: #eee;
}
.containe {
  padding: 20px;
  width: 100%;
  height: 90px;
  line-height: 50px;
  display: flex;
  justify-content: space-around;
  background: #fff;
}
.patientname {
  // flex: 1
  margin-left: 200px;
}
.patient {
  border: 1px solid #999;
  border-radius: 10px;
  padding: 0 5px;
  outline: none;
}
.content{
    width: 100%;
    height:500px;
    border: 1px solid red;
}
</style>
