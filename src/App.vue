<template>
  <div id="app">
    <Nav v-bind:playlists="playlists"/>
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
      },
      playlists: [
        {
          name: 'Landings',
          route: 'playlist?id=PLBQ5P5txVQr-Q68JtHuTTBWldX2psIqA1',
          id: 'PLBQ5P5txVQr-Q68JtHuTTBWldX2psIqA1'
        },
        {
          name: 'Launches',
          route: 'playlist?id=PLC474234E124B5213',
          id: 'PLC474234E124B5213'
        },
        {
          name: 'Featured Videos',
          route: 'playlist?id=PLF0D3A9748DC5E42D',
          id: 'PLF0D3A9748DC5E42D'
        },
        {
          name: 'SpaceX: Advanced Testing',
          route: 'playlist?id=PL5691F20A94B40827',
          id: 'PL5691F20A94B40827'
        },
        {
          name: 'SpaceX: What\'s Next',
          route: 'playlist?id=PL804F06E0DFC20878',
          id: 'PL804F06E0DFC20878'
        },
        {
          name: 'SpaceX: Our Vision',
          route: 'playlist?id=PL65D245A30E8B8F67',
          id: 'PL65D245A30E8B8F67'
        },
        {
          name: 'SpaceX: Tours',
          route: 'playlist?id=PL4421AD45A1247EDA',
          id: 'PL4421AD45A1247EDA'
        }
      ]
    }
  }
}
</script>

<style>
</style>
