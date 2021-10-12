<template>
  <div class="demo" id="dynamic-component-demo" >
      <button  v-for="item in tabs" :key="item" :class="['tab-button',{active:currentTab ===item}]" @click='currentTab = item'>{{item}}</button>

      <component :is='currentTab' class="tab"
      ></component>
  </div>
</template>

<script>
import TabHome from"./components/TabHome"
import TabTwo from"./components/tabTwo/index.vue"
export default {
    name:'Study',
    data(){
        return{
            currentTab:"TabHome",
            tabs: ['TabHome', 'TabTwo', 'Archive']
        }
    },
    components:{
        TabHome,
        TabTwo
    }
}

</script>

<style>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.demo-tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>