<template>
  <div>
    <nav class="teal darken-3">
      <div class="nav-wrapper container">
          <span id="logo-container">
            <a href="/"><img class="icon hide-on-med-and-down" src="/img/icons/icons8-photo-gallery-96.png" width="65"></a>
            <a href="/" class="brand-logo">Photo App</a>
          </span>

          <ul class="right hide-on-med-and-down">
            <li><router-link to="/">Recent</router-link></li>
            <!-- Dropdown Trigger -->
            <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Categories<i class="material-icons right">arrow_drop_down</i></a></li>
          </ul>

          <a href="#" data-target="mobile-menu" class="sidenav-trigger"><i class="material-icons">menu</i></a>

          <ul id="mobile-menu" class="sidenav">
            <li><router-link to="/">Recent</router-link></li>
            <!-- Dropdown Trigger -->
            <li><a class="dropdown-trigger" href="#!" data-target="dropdown2">Categories<i class="material-icons right">arrow_drop_down</i></a></li>
          </ul>
      </div>
    </nav>

    <!-- dropdown structure for categories -->
    <ul id="dropdown1" class="dropdown-content">
        <li><router-link to="category">Buildings</router-link></li>
        <li><router-link to="category">Food</router-link></li>
        <li><router-link to="category">Robots</router-link></li>
        <li><router-link to="category">Food Robots</router-link></li>
        <li><router-link to="category">Owls</router-link></li>
        <li><router-link to="category">Things on Fire</router-link></li>
        <li><router-link to="category">Purple</router-link></li>
        <li><router-link to="category">Magic Tricks</router-link></li>
        <li><router-link to="category">Smells</router-link></li>
    </ul>
    <ul id="dropdown2" class="dropdown-content">
        <li><router-link to="category">Buildings</router-link></li>
        <li><router-link to="category">Food</router-link></li>
        <li><router-link to="category">Robots</router-link></li>
        <li><router-link to="category">Food Robots</router-link></li>
        <li><router-link to="category">Owls</router-link></li>
        <li><router-link to="category">Things on Fire</router-link></li>
        <li><router-link to="category">Purple</router-link></li>
        <li><router-link to="category">Magic Tricks</router-link></li>
        <li><router-link to="category">Smells</router-link></li>
    </ul>
  
  </div>
</template>

<script>
import M from 'materialize-css';
export default {
  name: 'Nav',
  mounted() {
    M.AutoInit();
  }
}
</script>

<style scoped>
</style>