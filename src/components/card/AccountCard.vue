<template>
  <v-card 
    tile
    max-width="250"
  >
    <v-img :src="require('@/images/user_icon.png')" height="220" width="220">
      <div class="d-flex flex-column fill-height">
        <v-card-title>
          <v-btn light icon> <v-icon>mdi-heart</v-icon> </v-btn>
          <v-spacer />
          <v-btn light icon> <v-icon>mdi-dots-vertical</v-icon> </v-btn>
        </v-card-title>
      </div>
    </v-img>
    <v-list two-line class="pa-0">
      <v-list-item>
        <v-list-item-action />
        <v-list-item-content>
          <v-list-item-title>{{account?.firstName}} {{account?.lastName}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider inset></v-divider>
      <v-list-item href="#">
        <v-list-item-action>
          <v-icon color="black">mdi-phone</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title></v-list-item-title>
          <v-list-item-subtitle>Mobile</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action> <v-icon>mdi-chat</v-icon> </v-list-item-action>
      </v-list-item>
      <v-divider inset></v-divider>
      <v-list-item href="#">
        <v-list-item-action>
          <v-icon color="indigo">mdi-mail</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{account?.email}}</v-list-item-title>
          <v-list-item-subtitle>Personal</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script lang="ts">
  import { User } from "@/store/modules/account/types";
  import { Component, Vue, Watch } from "vue-property-decorator";
  import { reactive} from 'vue'
  import {ref} from 'vue'

  @Component
  export default class AccountCard extends Vue {
    get account():User {
        return this.$store.getters['account/getAccount']
    }
  }
</script>
