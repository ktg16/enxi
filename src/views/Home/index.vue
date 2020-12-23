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
          <v-btn x-small text color="primary" >挂号</v-btn>
          <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn x-small text color="primary" v-bind="attrs" v-on="on">新建</v-btn>
            </template>
             <v-card >
        <!-- <v-card-title style =" font-size：5px">
          <span class="headline">User Profile</span>
        </v-card-title> -->
        <v-card-text style =" font-size：10px">
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Legal first name*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Email*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false" style =" font-size：5px">Close</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false" style =" font-size：5px">Save</v-btn>
        </v-card-actions>
        <!-- 123456 -->
      </v-card>


          </v-dialog>
          <!-- <button>挂号</button> -->
        </div>
      </div>
      <div class="content">
        <h3 class="content-title">挂号详情</h3>
        <div class="detail">
          <div class="detail-header">
            <div class="header-docter">医生</div>
            <div>状态</div>
            <div>姓名</div>
            <div>性别</div>
            <div>年龄</div>
            <div>咨询项</div>
            <div>号码</div>
          </div>
          <div class="detail-docter">
            <!-- <div class="docter">
              <div>王五</div>
              <div>王五</div>
              <div>王五</div>
              <div>王五</div>
            </div>
            <div class="patient"> -->
    <v-tabs class="tabs" vertical>
      <v-tab >
        <!-- <v-icon large left>mdi-account</v-icon> -->
        王五
      </v-tab>
      <v-tab>
        <!-- <v-icon left>mdi-account</v-icon> -->
        王五
      </v-tab>
      <v-tab>
        <!-- <v-icon left>mdi-account</v-icon> -->
        王五
      </v-tab>

      <v-tab-item class="patient-list">
         <!-- <v-data-table
    :headers="headers"
    :items="desserts"
    hide-default-header
    hide-default-footer
    class="elevation-1"
    
  ></v-data-table> -->
      <ul class="list-docter1">
        <li>12</li>
        <li >卢桂兰</li>
        <li>女</li>
        <li>22</li>
        <li>综合治</li>
        <li>就诊</li>
      </ul>
      <ul class="list-docter1">
        <li>号</li>
        <li>卢桂兰</li>
        <li>女</li>
        <li>22</li>
        <li>综合治</li>
        <li>就诊</li>
      </ul>
      <ul class="list-docter1">
        <li>12</li>
        <li >卢桂兰</li>
        <li>女</li>
        <li>22</li>
        <li>综合治</li>
        <li>就诊</li>
      </ul>
      <ul class="list-docter1">
        <li>号</li>
        <li>卢桂兰</li>
        <li>女</li>
        <li>22</li>
        <li>综合治</li>
        <li>就诊</li>
      </ul>
      <ul class="list-docter1">
        <li>12</li>
        <li >卢桂兰</li>
        <li>女</li>
        <li>22</li>
        <li>综合治</li>
        <li>就诊</li>
      </ul>
      <ul class="list-docter1">
        <li>号</li>
        <li>卢桂兰</li>
        <li>女</li>
        <li>22</li>
        <li>综合治</li>
        <li>就诊</li>
      </ul>
      <ul class="list-docter1">
        <li>12</li>
        <li >卢桂兰</li>
        <li>女</li>
        <li>22</li>
        <li>综合治</li>
        <li>就诊</li>
      </ul>
      <ul class="list-docter1">
        <li>号</li>
        <li>卢桂兰</li>
        <li>女</li>
        <li>22</li>
        <li>综合治</li>
        <li>就诊</li>
      </ul>
      <ul class="list-docter1">
        <li>号</li>
        <li>卢桂兰</li>
        <li>女</li>
        <li>22</li>
        <li>综合治</li>
        <li>就诊</li>
      </ul>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
            </p>

            <p>
              Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
            </p>

            <p>
              Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc.
            </p>

            <p>
              Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
            </p>

            <p class="mb-0">
              Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            </p>

            <p class="mb-0">
              Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
            </div>
          </div>
        </div>
      </div>
    <!-- </div> -->
  </v-app>
</template>

<script>
export default {
  name: "Home",
  data:()=>({
    dialog: false
  })
};
</script>

<style  scoped>
.background /deep/ .v-btn {
  font-size: 12px;
  /* padding: 30px; */
}
.patient-list /deep/ .v-data-table td{
  font-size: 12px !important;
}
.tabs /deep/ .v-tab {
  min-width: 70px;
  font-size: 12px;
  height: 25px !important;
  padding: 0;
  margin: 0;
  /* min-height: 0px; */
}

</style>
<style lang="scss" scoped>
.background {
  width: 100%;
  height: 100%;
  background: #eee;
  font-size: 10px;
  display: flex;
  flex-direction: column;
}
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
.content {
  padding: 0 5px;
  margin-top: 5px;
  flex: 1;
  width: 100%;
  background: #fff;
  .detail-header {
    display: flex;
    justify-content: space-between;
  }
  .detail-header div{
    text-align: center;
  }
  .header-docter {
    width: 70px;
    text-align: center;
    
  }
  .list-docter1{
    display: flex;
    justify-content:space-between; 
    border-bottom: 1px solid #eee;
    margin-top: 5px;
    
  }
  .list-docter1 li{
    // border: 1px solid red;
    width: 50px;
    text-align: left;

    // width: ;
  }
  .list-docter1 li:nth-child(1){
    // text-align: center !important;
    width: 45px;
    margin-left: 3px;
  }
  .list-docter1 li:nth-child(3){
    // text-align: center !important;
    padding-left: 15px;

  }
  .list-docter1 li:nth-child(4){
    padding-left: 10px ;
    // text-align: center;

  }
  .list-docter1 li:nth-child(5){
    text-align: center;
  }
  .list-docter1 li:nth-child(6){
    text-align: right;
  }
}
.content-title {
  text-align: center;
}
.patient-list{
  height: 200px;
  overflow: auto;
}
// .button{
//   font-size: 15px;
// }
</style>