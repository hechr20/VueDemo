<template>
  <v-app-bar
    clipped-left
    app
    color="primary" 
    dark
  >  
    <v-app-bar-nav-icon @click="toggleClick()"><v-icon>mdi-menu</v-icon></v-app-bar-nav-icon>
    <v-toolbar-title>Demo project</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <account-card/>
      </v-menu>
  </v-app-bar>
</template>

<script lang="ts">
  import { Component, Vue, Inject, Prop, Watch } from 'vue-property-decorator';
  import AccountCard from '../card/AccountCard.vue';

  const props = Vue.extend({
    props: {
      shrink: Boolean
    }
  })

  @Component({
    components:{AccountCard}
  })

  export default class TopToolBar extends props {
    init () {
    }
    toggleClick () {
        this.$store.commit('app/setLeftSidebar')
        console.log(this.$store.state.app.showLeftSidebar)
    }
  }
</script>

