<template>
  <div id="app">
    <Nav v-bind="channel"/>
    <router-view v-bind="channel"/>
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
  data() {
    return {
      channel: {
        channelName: 'SpaceX',
        channelId: 'UCtI0Hodo5o5dUb67FeUjDeA'
      }
    }
  }
}
</script>

<style>
</style>
