<template>
  <div id="app">
    <Nav />
    <!--
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    -->
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
export default {
  name: 'App',
  components: {
    Nav,
    Footer
  }
}
</script>

<style>
</style>
