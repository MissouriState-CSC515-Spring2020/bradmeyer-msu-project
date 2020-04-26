<template>
  <div class="container">
    <div class="section">
      <h3 class="header center teal-text">{{ name }}</h3>
      <div v-if="loading" class="center">Loading...</div>
      <div v-if="error" class="center">{{ error }}</div>
      <h5 v-if="data" class="center teal-text text-lighten-2">6 videos</h5>
    </div>

    <div v-if="data" class="section">
      <div class="row">
        <div class="col s4">
          <VideoCard v-bind:info=data.items[0] />
        </div>
        <div class="col s4">
          <VideoCard v-bind:info=data.items[1] />
        </div>
        <div class="col s4">
          <VideoCard v-bind:info=data.items[2] />
        </div>
      </div>
      <div class="row">
        <div class="col s4">
          <VideoCard v-bind:info=data.items[3] />
        </div>
        <div class="col s4">
          <VideoCard v-bind:info=data.items[4] />
        </div>
        <div class="col s4">
          <VideoCard v-bind:info=data.items[5] />
        </div>
      </div>
    </div>

    <div v-if="data" class="section">
      <ul class="pagination center">
        <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
        <li class="active red lighten-1"><router-link to="category">1</router-link></li>
        <li class="disabled"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import VideoCard from '../components/widgets/VideoCard'
import axios from 'axios';
export default {
  name: 'Playlist',
  components: {
    VideoCard
  },
  data() {
    return {
      name: 'Playlist',
      loading: false,
      error: null,
      data: null
    }
  },
  created() {
    // called when the view is created
    this.fetchData()
  },
  watch: {
    // call again if the route changes
    '$route': 'fetchData',
  },
  methods: {
    fetchData() {
      this.loading = true;
      this.error = null;
      this.data = null;
      if (!this.$route.query.id) {
        this.loading = false;
        this.error = "No playlist id specified.";
        return
      }
      axios
        .get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=6&playlistId=${this.$route.query.id}&key=AIzaSyBgJ9iFaO-Nea2h-11zox562hHgXR0x0gc`)
        .then(response => {
          this.loading = false;
          // console.log(response.data);
          if (response.data.pageInfo.totalResults == 0) {
            this.error = `${this.$route.query.id} is not a valid YouTube playlist ID.`
          } else {
            this.data = response.data;
          }
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error);
          this.loading = false;
          this.error = "Something went wrong while fetching the playlist data."
        })
    }
  }
}
</script>