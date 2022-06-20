<template>
<div class="">
  <table class="table ">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col text-center">Article Name</th>
      <th scope="col justify-text-center">Article picture</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>
    <tr  :class="{ active: index == currentIndex }"
          v-for="(Article, index) in Articles"
          :key="index">
      <th scope="row"></th>
      <td>
        <h5 class="card-title">{{Article.name}}</h5>
      </td>
      <td>
        <img class="img-fluid" :src="'http://127.0.0.1:4000\\'+Article.picture.path" alt="Card image cap">
      </td>
      <td>
        <button @click="DropArticle(Article._id)"  class="btn btn-sm mx-1 btn-danger" ><i class="bi bi-trash3"></i></button>
        <button class="btn btn-sm mx-1 btn-primary"><i class="bi bi-pencil-square"></i></button>  
      </td>
      
    </tr>
    
  </tbody>
</table>
  </div> 
</template>
<script>
import ArticleService from "../services/ArticleService";
export default {
  name: "Articles-list",
  data() {
    return {
      Articles: [],
      currentTutorial: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveArticlesofMenu() {
      ArticleService.getbymenu(this.$route.query.id_menu)
        .then(response => {
          this.Articles = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    
    },
    DropArticle(id){
      ArticleService.delete(id)
        .then(response => {
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    
  },
  mounted() {
    this.retrieveArticlesofMenu();
  }
};
</script>
