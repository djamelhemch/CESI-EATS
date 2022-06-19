<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark text-white">
      <div class="navbar-nav mr-auto">
        <li class="nav-item text-center">
          <router-link to="/restaurateur/displaymenu" class="nav-link text-white">Display Menu</router-link>
        </li>
        <li class="nav-item text-center">
          <router-link to="/restaurateur/addmenu" class="nav-link text-white">Add Menu</router-link>
        </li>
      </div>
    </nav>
    <div class="container mt-3">
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MenusAdd from '@/components/MenuAdd.vue';
import MenuList from '@/components/MenuList.vue';


@Component({
  components: {
    MenusAdd,
    MenuList
  },
})
export default class Restaurateur extends Vue {
    created(){
        document.title = "Restaurateur"
    }
  }
</script>
<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>

<style>
  @import '../assets/css/Restaurateur.css';
</style>