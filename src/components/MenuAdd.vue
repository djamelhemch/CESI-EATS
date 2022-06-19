<template>
<div>
  <div>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">    
</div>
    <div class="form-group">
        <label>Name</label>
        <input type="text" 
        class="form-control"
        id="name"
        required
        v-model="menu.name"
        name="name">
    </div>
    <div class="form-group">
        <label>price</label>
        <input type="number" 
        required
        v-model="menu.price"
        name="price"
        class="form-control">
    </div>
    <div class="custom-file form-group">
        <input type="file" class="custom-file-input" 
        id="picture" ref="picture" v-on:change="handleFileUpload()"
        
>
        <label class="custom-file-label" for="customFile">Upload picture</label>
    </div>
    <div class="text-center my-3">
        <button @click="saveMenu" class="btn btn-light text-dark">Submit</button>
    </div>
</div>
</template>

    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class MenuAdd extends Vue created(){}
</script>
<style>
  @import '../assets/css/AddMenu.css';
</style>
<script>
import MenuService from "../services/MenuService.js";

let data = new FormData();  
export default {
  name: "MenuAdd",
  data() {
    return {
      menu: {
        id: null,
        name: "",
        price: "",
        picture: "",
        published: false
      },
      submitted: false
    };
  },
  methods: {
       
    saveMenu() {
    data.append('name', this.menu.name);
    data.append('price', this.menu.price);
    
      MenuService.post(data)
        .then(response => {
          this.menu.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newMenu() {
      this.submitted = false;
      this.menu = {};
    },
    handleFileUpload(){
    this.picture = this.$refs.picture.files[0];
    console.log(this.picture);
    data.append('picture', this.picture);
  }
  }
};
</script>
