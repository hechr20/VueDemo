<template>
    <div id="app"> 
  <v-app>
    <top-tool-bar :shrink="false"></top-tool-bar>
    <left-side-drawer :shrink="false"></left-side-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
    </div>
</template>

<script>
  import TopToolBar from '@/components/navigation/TopToolBar.vue';
  import LeftSideDrawer from '@/components/navigation/LeftSideDrawer.vue';
  import { Component, Vue, Inject, Prop, Watch } from 'vue-property-decorator';
  import DemoData from '@/demodata'

  @Component({
    components:{LeftSideDrawer, TopToolBar}
  })

   export default class App extends Vue {

    };
</script>
<style>
    html, body {
        width: 100%;
        height: 100%;
        background: #f0f0f0;
        overflow: auto;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
    }

    #app {
        height: 100%;
    }
</style>
<style lang="less">
    @import "../src/views/main.less";
</style>

