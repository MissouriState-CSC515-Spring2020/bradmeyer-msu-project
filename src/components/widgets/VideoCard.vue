<template>
  <div>
    <router-link :to="{path: '/videodetails?id=' + videoId}">
      <img class="responsive-img hoverable" v-bind:src=info.snippet.thumbnails.high.url>
      {{ info.snippet.title }}
    </router-link>
    <div>{{ publishedAt.time }} {{ publishedAt.date }}</div>
  </div>
</template>

<script>
import { parseISO, format } from 'date-fns'
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
    },
    publishedAt: function() {
      let d = parseISO(this.info.snippet.publishedAt);
      return {
        date: format(d, 'M/d/y'),
        time: format(d, 'HH:mm')
      }
    }
  }
}
</script>