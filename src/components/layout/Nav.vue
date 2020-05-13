<template>
  <div>
    <nav class="teal darken-3">
      <div class="nav-wrapper container">
          <span id="logo-container">
            <router-link to="/"><img class="icon hide-on-med-and-down" src="img/icons8-youtube-64.png"></router-link>
            <router-link to="/" class="brand-logo">Video App</router-link>
          </span>

          <ul class="right hide-on-med-and-down">
            <li v-if="this.$route.name == 'VideoDetails'" class="active">
              <a href="#">Video Details</a>
            </li>
            <li v-bind:class="recentClassObj">
              <router-link to="/">Recent</router-link>
            </li>
            <!-- Dropdown Trigger -->
            <li v-bind:class="playlistClassObj">
              <a class="dropdown-trigger" href="#!" data-target="dropdown1">{{playlistNameObj.name}}<i class="material-icons right">arrow_drop_down</i></a>
            </li>
          </ul>

          <a href="#" data-target="mobile-menu" class="sidenav-trigger"><i class="material-icons">menu</i></a>

          <ul id="mobile-menu" class="sidenav">
            <li v-if="this.$route.name == 'VideoDetails'" class="active">
              <a href="#">Video Details</a>
            </li>
            <li v-bind:class="recentClassObj">
              <router-link to="/">Recent</router-link>
            </li>
            <!-- Dropdown Trigger -->
            <li v-bind:class="playlistClassObj">
              <a class="dropdown-trigger" href="#!" data-target="dropdown2">{{playlistNameObj.name}}<i class="material-icons right">arrow_drop_down</i></a>
            </li>
          </ul>
      </div>
    </nav>

    <!-- dropdown structure for playlists -->
    <ul id="dropdown1" class="dropdown-content">
      <li v-bind:key="playlist.name" v-for="playlist in playlists">
        <router-link :to="'playlist?id='+playlist.id">{{playlist.name}}</router-link>
      </li>
    </ul>
    <ul id="dropdown2" class="dropdown-content">
      <li v-bind:key="playlist.name" v-for="playlist in playlists">
        <router-link :to="'playlist?id='+playlist.id">{{playlist.name}}</router-link>
      </li>
    </ul>
  
  </div>
</template>

<script>
import M from 'materialize-css';
export default {
  name: 'Nav',
  props: ["playlists"],
  data() {
    return {
    }
  },
  computed: {
    recentClassObj: function () {
      return {
        active: this.$route.name == 'Recent'
      }
    },
    playlistClassObj: function () {
      return {
        active: this.$route.name == 'Category'
      }
    },
    playlistNameObj: function () {
      // This was originally so that the navbar could show the name
      // of the selected playlist, but it might be really long, and
      // there are lots of other reasons that might be a bad idea
      let pl = 'Playlists';
      // if (this.$route.name == 'Playlist') {
      //  pl = 'Playlist';
      // }
      return {
        name: pl
      }
    }
  },
  mounted() {
    M.AutoInit();
  }
}
</script>

<style scoped>
</style>