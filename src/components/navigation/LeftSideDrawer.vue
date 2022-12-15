<template>
  <v-navigation-drawer 
        v-model="$store.state.app.showLeftSidebar"
        clipped
        app
        color="secondary"
        dark
        left
    >
        <v-list height="..vh">
            <v-list-item class="px-4 align-left justify-left fill-height">
                <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Menu</v-list-item-title>
            </v-list-item>

            <v-divider/>

            <v-list-item v-for="child in listData" :key="child.name" :to="child.link" link  
            class="px-0 align-left justify-left fill-height">
                <template v-if="child.subMenu.length>0">
                    <v-list-group :value="true" no-action sub-group>
                        <template v-slot:activator>
                            <v-list-item-content style="color:white">{{child.name}}</v-list-item-content>
                        </template>

                        <v-list-item v-for="subName in child.subMenu" :key="subName.name" link :to="subName.link"  
                        class="px-8 align-left justify-left fill-height" style="color:white">
                        <v-list-item-icon>
                        <v-icon></v-icon>
                        </v-list-item-icon>
                        <v-list-item-title v-text="subName.name"></v-list-item-title>              
<!--                        <v-list-item-icon><v-icon>mdi-book</v-icon></v-list-item-icon>
    -->
                        </v-list-item>
                    </v-list-group>
                </template>
                <template v-else>
                    <v-list-item-icon>
                        <v-icon></v-icon>
                    </v-list-item-icon>
                    <v-list-item-title v-text="child.name" class="px-4 align-left justify-left fill-height"></v-list-item-title>              
                </template>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
  import DemoData from '@/demodata'
  import { Component, Vue, Inject, Prop, Watch } from 'vue-property-decorator';

  const props = Vue.extend({
    props: {
      shrink: Boolean
    }
  })

  export default class LeftSideDrawer extends props {
    get listData(){
        return DemoData.getListData;
    }
    mounted()
    {
    }
  };
</script>
