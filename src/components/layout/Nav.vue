<template>
  <div>
    <nav class="teal darken-3">
      <div class="nav-wrapper container">
          <span id="logo-container">
            <router-link to="/"><img class="icon hide-on-med-and-down" src="img/icon_photo_gallery.png" width="65"></router-link>
            <router-link to="/" class="brand-logo">Video App</router-link>
          </span>

          <ul class="right hide-on-med-and-down">
            <li v-if="this.$route.name == 'VideoDetails'" class="active">
              <router-link to="/videodetails">Video Details</router-link>
            </li>
            <li v-bind:class="{ active: activeObject.activeRecent }">
              <router-link to="/">Recent</router-link>
            </li>
            <!-- Dropdown Trigger -->
            <li v-bind:class="{ active: activeObject.activeCategory }">
              <a class="dropdown-trigger" href="#!" data-target="dropdown1">{{categoryObject.name}}<i class="material-icons right">arrow_drop_down</i></a>
            </li>
          </ul>

          <a href="#" data-target="mobile-menu" class="sidenav-trigger"><i class="material-icons">menu</i></a>

          <ul id="mobile-menu" class="sidenav">
            <li v-if="this.$route.name == 'VideoDetails'" class="active">
              <router-link to="/videodetails">Video Details</router-link>
            </li>
            <li v-bind:class="{ active: activeObject.activeRecent }">
              <router-link to="/">Recent</router-link>
            </li>
            <!-- Dropdown Trigger -->
            <li v-bind:class="{ active: activeObject.activeCategory }">
              <a class="dropdown-trigger" href="#!" data-target="dropdown2">{{categoryObject.name}}<i class="material-icons right">arrow_drop_down</i></a>
            </li>
          </ul>
      </div>
    </nav>

    <!-- dropdown structure for categories -->
    <ul id="dropdown1" class="dropdown-content">
      <li v-bind:key="category.name" v-for="category in categories">
        <router-link :to=category.route>{{category.name}}</router-link>
      </li>
    </ul>
    <ul id="dropdown2" class="dropdown-content">
      <li v-bind:key="category.name" v-for="category in categories">
        <router-link :to=category.route>{{category.name}}</router-link>
      </li>
    </ul>
  
  </div>
</template>

<script>
import M from 'materialize-css';
export default {
  name: 'Nav',
  data() {
    return {
      categories: [
        {
          name: 'Buildings',
          route: 'category'
        },
        {
          name: 'Food',
          route: 'category'
        },
        {
          name: 'Robots',
          route: 'category'
        },
        {
          name: 'Food Robots',
          route: 'category'
        },
        {
          name: 'Owls',
          route: 'category'
        },
        {
          name: 'Things on Fire',
          route: 'category'
        },
        {
          name: 'Purple',
          route: 'category'
        },
        {
          name: 'Magic Tricks',
          route: 'category'
        },
        {
          name: 'Smells',
          route: 'category'
        }
      ]
    }
  },
  computed: {
    activeObject: function () {
      return {
        activeRecent: this.$route.name == 'Recent',
        activeCategory: this.$route.name == 'Category'
      }
    },
    categoryObject: function () {
      let cat = 'Categories';
      if (this.$route.name == 'Category') {
        cat = 'Category: Buildings';
      }
      return {
        name: cat
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