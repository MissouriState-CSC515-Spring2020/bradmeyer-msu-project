<template>
  <div>
    <router-link :to="{path: '/videodetails?id=' + videoId}">
      <img class="responsive-img hoverable" v-bind:src=info.snippet.thumbnails.high.url>
      {{ info.snippet.title }}
    </router-link>
    <div>{{ info.snippet.publishedAt }}</div>
  </div>
</template>

<script>
export default {
  name: 'VideoCard',
  props: ["info"],
  computed: {
    videoId: function() {
      if (this.info.id.videoId) {
        return this.info.id.videoId
      } else if (this.info.snippet.resourceId.videoId) {
        return this.info.snippet.resourceId.videoId
      } else {
        return ""
      }
    }
  }
}
</script>