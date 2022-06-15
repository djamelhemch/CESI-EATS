<template>

  <div id="app">

  <div><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></div>

<!--NavBar-->
<div class="header">
  <b-navbar type="dark" class="navtest" sticky>
<!--SideMenu-->
    <div>
    <b-button v-b-toggle.sidebar-backdrop style="color: white;
    background-color: transparent;
    border-color: transparent;"><i class="fa fa-2xl fa-bars" style="font-size: 30px;"></i></b-button>

    <b-sidebar
      id="sidebar-backdrop"
      :backdrop-variant="variant"
      backdrop
      shadow
    >
      
    </b-sidebar>
  </div>
    
    <b-navbar-brand href="/home" style="font-family: UberMoveText, sans-serif;font-size: 30px;width: auto;
    color:#FBFEF9;padding: 0 30px;text-shadow: 4px 4px 4px black;">Cesi Eats</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
      <b-button style="position : relative;left:750px;background: #FFFFFF;min-height: 48px;white-space: nowrap;border-radius: 500px;
      line-height: 20px;padding: 12px 16px;-webkit-box-pack: center;
    justify-content: center;    -webkit-box-align: center;
    align-items: center;width: auto;    font-weight: bolder;font-family: UberMoveText, sans-serif;box-sizing: border-box;
    color: #000000;font-size: 16px;box-shadow: 0px 0px 8px rgb(0 0 0 / 10%), 0px 4px 4px rgb(0 0 0 / 4%);"><i class="fa fa-user" style="font-size: 20px;"></i>
Connexion</b-button>
    <div style="padding: 0 10px;"></div>
      <b-button style="position : relative;left:750px; background: black;min-height: 48px;white-space: nowrap;border-radius: 500px;
      line-height: 20px;padding: 12px 16px;-webkit-box-pack: center;
    justify-content: center;  -webkit-box-align: center;
    align-items: center;width: auto;    font-weight: bolder;font-family: UberMoveText, sans-serif;box-sizing: border-box;
    color: #000000;font-size: 16px;color: white;">Inscription</b-button>

      </b-navbar-nav>

      
    </b-collapse>
  </b-navbar>




  <div>
  <h1 style="max-width: 75%;margin:150px;
  font-size: 52px;font-family: UberMove, sans-serif;font-weight: bolder;color:white;text-shadow: 5px 5px 5px black;">Vos plats préférés, directement à votre porte</h1>
  </div>
</div>

<router-view/>

    <footer data-aos="fade-up" class="text-light">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-lg- col-xl-3">
          <h5>
            À propos
          </h5>
          <hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25">
          <p class="mb-0">
            Cesi Eats présentation
          </p>
        </div>
        <div class="col-md-4 col-lg-3 col-xl-3">
          <h5>
            Contact
          </h5>
          <hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25">
          <ul class="list">
            <li><i class="fa fa-envelope mr-2"></i> contact@cesieats.dz</li>
            <li><i class="fa fa-phone mr-2"></i> (+213) 077 77 77 77</li>
            <li><i class="fa fa-phone mr-2"></i> (+213) 077 77 77 77</li>
            <li><i class="fa fa-phone mr-2"></i> (+213) 077 77 77 77</li>
          </ul>
        </div>
        <div class="col-md-2 col-lg-2 col-xl-3 mx-auto">
          <h5>
            Retrouvez-nous sur :
          </h5>
          <hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25">
          <ul class="list-unstyled">
            <li>
              <a href="#" class="fb btn" target="_blank" style="background-color: lightgray;color: white;"><i class="fa fa-facebook fa-fw fa-2x" style="" ></i></a>
            </li>
            <li>
              <br>
            <a href="#" class="twitter btn" target="_blank" style="background-color: lightgray;color: white;"><i class="fa fa-twitter fa-fw fa-2x"></i></a>
            </li>
          </ul>
        </div>
        
        <div class="col">
          <center>
            <strong><p>Copyright © 2022. All rights reserved to Cesi Oran A4.</p></strong>
          </center>
          </div>
          </div>
          </div>
        </footer>

    
    

    
    </div>

  



</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.header{
  background-image: url("assets/images/test2.jpg");
  height:600px;
  
}

.navtest{
  background:transparent; 
  height:96px;
  width: auto;
}


footer
{
	background: black;
	padding: 40px;
	transition: .5s;
}

footer a
{
	color: black!important;
	transition: .5s;
}

</style>






<script lang="ts">
  export default {
    data() {
      return {
        variant: 'dark',
        variants: [
          'transparent',
          'white',
          'light',
          'dark',
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
        ]
      }
    }
  }
</script>