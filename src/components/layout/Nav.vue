<template>
  <div>
		<!-- dropdown structure for categories -->
		<ul id="cat-dropdown" class="dropdown-content">
			<li><a href="category">Buildings</a></li>
			<li><a href="category">Food</a></li>
			<li><a href="category">Robots</a></li>
			<li><a href="category">Food Robots</a></li>
			<li><a href="category">Owls</a></li>
			<li><a href="category">Things on Fire</a></li>
			<li><a href="category">Purple</a></li>
			<li><a href="category">Magic Tricks</a></li>
			<li><a href="category">Smells</a></li>
		</ul>
		<ul id="side-dropdown" class="dropdown-content">
			<li><a href="category">Buildings</a></li>
			<li><a href="category">Food</a></li>
			<li><a href="category">Robots</a></li>
			<li><a href="category">Food Robots</a></li>
			<li><a href="category">Owls</a></li>
			<li><a href="category">Things on Fire</a></li>
			<li><a href="category">Purple</a></li>
			<li><a href="category">Magic Tricks</a></li>
			<li><a href="category">Smells</a></li>
		</ul>

		<nav class="teal darken-3" role="navigation">
			<div class="nav-wrapper container"><a id="logo-container" href="/" class="brand-logo">NoLogoYet</a>
				<ul class="right hide-on-med-and-down">
					<li class="active"><a href="/">Recent</a></li>
					<!-- Dropdown Trigger -->
					<li><a class="dropdown-trigger" href="#!" data-target="cat-dropdown">Categories<i class="material-icons right">arrow_drop_down</i></a></li>
				</ul>
		
				<ul id="nav-mobile" class="sidenav">
					<li class="active"><a href="/">Recent</a></li>
					<!-- Dropdown Trigger -->
					<li><a class="side-dropdown-trigger" href="#!" data-target="side-dropdown">Categories<i class="material-icons right">arrow_drop_down</i></a></li>
				</ul>
				<a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
			</div>
		</nav>
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