<template>
  <div class="container">
    <div class="section">
      <h3 class="header center teal-text">{{user}}'s Recent Videos</h3>
    </div>

    <div class="section">
      <div class="row">
        <div class="col s4">
          <router-link to="videodetails"><img class="responsive-img hoverable" src="img/jqh_small.jpg"></router-link>
        </div>
        <div class="col s4">
          <router-link to="videodetails"><img class="responsive-img hoverable" src="img/basspro_small.jpg"></router-link>
        </div>
        <div class="col s4">
          <router-link to="videodetails"><img class="responsive-img hoverable" src="img/centralhs_small.jpg"></router-link>
        </div>
      </div>
      <div class="row">
        <div class="col s4">
          <router-link to="videodetails"><img class="responsive-img hoverable" src="img/drury_small.jpg"></router-link>
        </div>
        <div class="col s4">
          <router-link to="videodetails"><img class="responsive-img hoverable" src="img/footbridge_small.jpg"></router-link>
        </div>
        <div class="col s4">
          <router-link to="videodetails"><img class="responsive-img hoverable" src="img/greenway_small.jpg"></router-link>
        </div>
      </div>
      <div class="row">
        <div class="col s4">
          <router-link to="videodetails"><img class="responsive-img hoverable" src="img/mercy_small.jpg"></router-link>
        </div>
        <div class="col s4">
          <router-link to="videodetails"><img class="responsive-img hoverable" src="img/mexicanvilla_small.jpg"></router-link>
        </div>
        <div class="col s4">
          <router-link to="videodetails"><img class="responsive-img hoverable" src="img/springfield_small.jpg"></router-link>
        </div>
      </div>
      <div class="row">
        <div class="col s4 offset-s4">
          <router-link to="videodetails"><img class="responsive-img hoverable" src="img/tumbler_small.jpg"></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recent',
  data() {
    return {
      user: 'Brad'
    }
  }
}
</script>