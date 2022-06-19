<template>
<div class="">
  <div>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Amatic+SC">
  </div>
  <table class="table ">
  <thead>
    <tr>
      <th scope="col text-center">Menu</th>
      <th scope="col justify-text-center">Menu picture</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr  :class="{ active: index == currentIndex }"
          v-for="(Menu, index) in Menus"
          :key="index">
      <td>
        <h5 class="card-title">{{Menu.name}}</h5>
      </td>
      <td>
        <img class="img-fluid" :src="'http://127.0.0.1:4000\\'+Menu.picture.path" alt="Card image cap">
      </td>
      <td>
        <button @click="DropMenu(Menu._id)"  class="btn btn-sm mx-1 btn-danger" ><i class="bi bi-trash3"></i></button>
        <button class="btn btn-sm mx-1 btn-primary"><i class="bi bi-pencil-square"></i></button>  
      </td>
    </tr>
    
  </tbody>
</table>

    <div data-aos-duration="500" data-aos="fade-right" class="container">

      <div id="menu">
  <a href="#" style="text-decoration: none;"><div class="item"><img style ="width:80px" src="@/assets/images/burger.jpg"/>
  <div>

    <center><strong><p style="font-size: 15px;width: 200px;" :class="{ active: index == currentIndex }"
          v-for="(Menu, index) in Menus"
          :key="index">{{Menu.name}}</p></strong></center>
  </div>
  </div></a>
  </div>
</div>
<div>
  <p><b>Margherita</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$12.50</span></p>
</div>
  </div> 
</template>
<script>
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import MenuService from "../services/MenuService";
export default {
  name: "MenuList",
  data() {
    return {
      Menus: [],
      currentTutorial: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveMenus() {
      MenuService.getAll()
        .then(response => {
          this.Menus = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    
    },
    DropMenu(id){
      MenuService.delete(id)
        .then(response => {
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveMenus();
  }
};
</script>
<style>
@import 'bootstrap/dist/css/bootstrap.css';
@import 'bootstrap-vue/dist/bootstrap-vue.css';

</style>
<style>
  @import '../assets/css/DisplayMenu.css';
</style>