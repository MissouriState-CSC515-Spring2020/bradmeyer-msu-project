<template>
  <div class="container">
    <div class="section">
      <h3 class="header center teal-text">Buildings</h3>
      <h5 class="center teal-text text-lighten-2">6 photos</h5>
    </div>

    <div class="section">
      <div class="row">
        <div class="col s4">
          <router-link to="photodetails"><img class="responsive-img hoverable" src="img/mexicanvilla_med.jpg"></router-link>
        </div>
        <div class="col s4">
          <router-link to="photodetails"><img class="responsive-img hoverable" src="img/drury_med.jpg"></router-link>
        </div>
        <div class="col s4">
          <router-link to="photodetails"><img class="responsive-img hoverable" src="img/jqh_med.jpg"></router-link>
        </div>
      </div>
      <div class="row">
        <div class="col s4">
          <router-link to="photodetails"><img class="responsive-img hoverable" src="img/centralhs_med.jpg"></router-link>
        </div>
        <div class="col s4">
          <router-link to="photodetails"><img class="responsive-img hoverable" src="img/mercy_med.jpg"></router-link>
        </div>
        <div class="col s4">
          <router-link to="photodetails"><img class="responsive-img hoverable" src="img/basspro_med.jpg"></router-link>
        </div>
      </div>
    </div>

    <div class="section">
      <ul class="pagination center">
        <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
        <li class="active red lighten-1"><router-link to="category">1</router-link></li>
        <li class="disabled"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Category'
}
</script>