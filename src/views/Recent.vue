<template>
  <div class="container">
    <div class="section">
      <h3 class="header center teal-text">{{channelName}}'s Recent Videos</h3>
      <div v-if="loading" class="center">Loading...</div>
      <div v-if="error" class="center">{{ error }}</div>
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
      <div class="row">
        <div class="col s4">
          <VideoCard v-bind:info=data.items[6] />
        </div>
        <div class="col s4">
          <VideoCard v-bind:info=data.items[7] />
        </div>
        <div class="col s4">
          <VideoCard v-bind:info=data.items[8] />
        </div>
      </div>
      <div class="row">
        <div class="col s4">
          <VideoCard v-bind:info=data.items[9] />
        </div>
        <div class="col s4">
          <VideoCard v-bind:info=data.items[10] />
        </div>
        <div class="col s4">
          <VideoCard v-bind:info=data.items[11] />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VideoCard from '../components/widgets/VideoCard'
import axios from 'axios';
export default {
  name: 'Recent',
  components: {
    VideoCard
  },
  data() {
    return {
      channelName: 'SpaceX',
      channelID: 'UCtI0Hodo5o5dUb67FeUjDeA',
      loading: false,
      error: null,
      data: null
    }
  },
  created() {
    // called when the view is created
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.loading = true;
      this.error = null;
      axios
        .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${this.channelID}&maxResults=12&order=date&key=AIzaSyBgJ9iFaO-Nea2h-11zox562hHgXR0x0gc`)
        .then(response => {
          this.loading = false;
          this.data = response.data;
        })
        .catch(error => {
          console.log(error);
          this.loading = false;
          this.error = "Something went wrong while fetching the recent videos."
        })
    }
  }
}
</script>