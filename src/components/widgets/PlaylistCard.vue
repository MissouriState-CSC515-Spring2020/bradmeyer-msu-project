<template>
  <div>
    <router-link :to="{path: '/videodetails?id=' + info.snippet.resourceId.videoId}">
      <img class="responsive-img hoverable" v-bind:src=info.snippet.thumbnails.high.url>
      {{ info.snippet.title }}
    </router-link>
    <div>{{ info.snippet.publishedAt }}</div>
  </div>
</template>

<script>
export default {
  name: 'PlaylistCard',
  props: ["info"],
}
</script>