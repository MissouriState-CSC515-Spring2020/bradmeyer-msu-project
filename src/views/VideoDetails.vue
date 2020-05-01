<template>
  <div class="container">
    <div class="section">
      <h3 class="header center teal-text">Video Details</h3>
      <div v-if="loading" class="center">Loading...</div>
      <div v-if="error" class="center">{{ error }}</div>
    </div>

    <div v-if="videoData" class="section">
      <div class="row">
        <div class="col s12">
          <div class="video-container">
            <iframe id="player" width="853" height="480" type="text/html" :src="'https://www.youtube.com/embed/'+videoData.items[0].id+'?autoplay=0&'" frameborder="0"></iframe>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col s6">
          <div class="card teal lighten-5">
            <div class="card-content">
              <span class="card-title">{{ videoData.items[0].snippet.title }}</span>
              <p>{{ videoData.items[0].snippet.description }}</p>
            </div>
          </div>
        </div>
        <div class="col s6">
          <ul class="collection">
            <li class="collection-item">Views: {{ videoData.items[0].statistics.viewCount }}</li>
            <li class="collection-item">Likes: {{ videoData.items[0].statistics.likeCount }}</li>
            <li class="collection-item">Dislikes: {{ videoData.items[0].statistics.dislikeCount }}</li>
            <li class="collection-item">Comments: {{ videoData.items[0].statistics.commentCount }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'VideoDetails',
  props: ["channelName", "channelId"],
  data() {
    return {
      loading: false,
      error: null,
      videoData: null
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
      this.videoData = null;
      if (!this.$route.query.id) {
        this.loading = false;
        this.error = "No video id specified.";
        return
      }
      axios
        .get(`https://www.googleapis.com/youtube/v3/videos?id=${this.$route.query.id}&key=AIzaSyBgJ9iFaO-Nea2h-11zox562hHgXR0x0gc&part=snippet,statistics`)
        .then(response => {
          this.loading = false;
          if (response.data.pageInfo.totalResults == 0) {
            this.error = `${this.$route.query.id} is not a valid YouTube video ID.`
          } else {
            this.videoData = response.data;
          }
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error);
          this.loading = false;
          this.error = "Something went wrong while fetching the video data."
        })
    }
  }
}
</script>