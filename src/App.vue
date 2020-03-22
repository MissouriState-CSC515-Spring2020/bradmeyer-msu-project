<template>
  <div id="app">
    <Nav />
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
  },
  // watch: {
  //   '$route' (to) {
  //     document.title = to.meta.title || 'Photo App Project';
  //   }
  // }
}
</script>

<style>
</style>
