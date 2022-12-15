<template>
    <div class="container">
      <div class="top">
        <div class="header">
          <h1>Credentials for current user:</h1>
        </div>
      </div>
      <div class="content">
        <p>
          <br>User name : {{account?.username}}
          <br>First name : {{account?.firstName}}
          <br>Last name : {{account?.lastName}}
          <br>Email : {{account?.email}}
        </p>
        <p>
            <router-link to="/login" style="background-color:silver;border-radius: 5px;padding:7px;">Logout</router-link>
        </p>
      </div> 
      <div class="content">
        <h3>Users registered:</h3>
        <span v-if="users.error" class="text-danger">ERROR: {{users.error}}</span>
        <ul v-if="users">
            <li v-for="user in users" :key="user.id">
                {{user.id +' ' + user.firstName + ' ' + user.lastName}}
                <span v-if="user.deleting"><em> - Deleting...</em></span>
                <span v-else-if="user.deleteError" class="text-danger"> - ERROR: {{user.deleteError}}</span>
                <span v-else> - <a @click="deleteUser(user.id)" style="background-color:red;border-radius: 5px;padding:5px;">Delete</a></span>
            </li>
        </ul>  
      </div>
    </div>
</template>

<script lang="ts">
  import { User } from "@/store/modules/account/types";
import { Component, Vue, Watch } from "vue-property-decorator";
  import { mapState, mapActions } from 'vuex'

  @Component({
      components:{
      }
    }
  )

  export default class usersList extends Vue {
    get account():User {
      return this.$store.getters['account/getAccount'];
    }
    get users(){
      return this.$store.getters['users/getUsers'];
    }
    mounted() {
    }
    getAllUsers () {
      this.$store.dispatch('users/getAll');
    }        
    deleteUser (id : number) {
      this.$store.dispatch('users/delete', {id});
    }        
};
</script>

<style scoped>
</style>