<template>
  <div>
    <nav class="teal darken-3">
      <div class="nav-wrapper container">
        <a id="logo-container" href="/" class="brand-logo">NoLogoYet</a>
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
    M.AutoInit(); // That way, it is only initialized when the component is mounted
  }
}
</script>

<style scoped>
</style>