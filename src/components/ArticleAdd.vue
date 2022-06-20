<template>
<div>
    <div class="form-group">
        <label>Name</label>
        <input type="text" 
        class="form-control"
        id="name"
        required
        v-model="article.name"
        name="name">
    </div>
    <div class="form-group">
        <label>price</label>
        <input type="number" 
        required
        v-model="article.price"
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
        <button @click="saveArticle" class="btn btn-light text-dark">Submit f </button>
        <p></p>
    </div>
</div>
</template>
<script>
import ArticleService from "../services/ArticleService";
 
let data = new FormData();
export default {
  
  name: "ArticleAdd",
  data() {
    return {
      article: {
        id: null,
        name: "",
        price: "",
        picture: "",
        id_menu :"",
        published: false
      },
      submitted: false
    };
  },
  methods: {
       
    saveArticle() {
    data.append('name', this.article.name);
    data.append('price', this.article.price);
    data.append('id_menu', this.$route.query.id_menu);

    console.log(this.article);
      ArticleService.post(data)
        .then(response => {
          this.article.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newArticle() {
      this.submitted = false;
      this.article = {};
    },
    handleFileUpload(){
    this.picture = this.$refs.picture.files[0];
    console.log(this.picture);
    data.append('picture', this.picture);
  }
  }
};
</script>
