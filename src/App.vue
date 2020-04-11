<template>
  <div id="app">
    <Nav />
    <router-view />
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
