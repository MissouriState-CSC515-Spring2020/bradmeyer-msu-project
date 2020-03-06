<template>
  <footer class="page-footer teal darken-1">
    <div class="container">
      <div class="row">
        <div class="col s8">
          <h6 class="grey-text text-lighten-4">
            This is a project for
            <a href="https://computerscience.missouristate.edu/coursesoffered.htm" target="_blank" class="yellow-text text-lighten-3">
              CSC 515/615 Advanced Internet Programming</a> at
            <a href="https://www.missouristate.edu" target="_blank" class="yellow-text text-lighten-3">
              Missouri State University</a>.
          </h6>
        </div>
        <div class="col s4 grey-text text-lighten-4">
          <h6>Powered by</h6>
          <ul>
            <li class="valign-wrapper"><i class="material-icons">chevron_right</i>
              <a href="https://nodejs.org/" target="_blank" class="yellow-text text-lighten-3">Node.js</a>
            </li>
            <li class="valign-wrapper"><i class="material-icons">chevron_right</i>
              <a href="https://vuejs.org/" target="_blank" class="yellow-text text-lighten-3">Vue.js</a>
            </li>
            <li class="valign-wrapper"><i class="material-icons">chevron_right</i>
              <a href="https://materializecss.com/" target="_blank" class="yellow-text text-lighten-3">Materialize CSS</a>
            </li>
            <li class="valign-wrapper"><i class="material-icons">chevron_right</i>
              <a href="https://icons8.com/icons/set/stack-of-photos--v1" target="_blank" class="yellow-text text-lighten-3">Photo Gallery icon</a>
              <span>by</span>
              <a href="https://icons8.com/" target="_blank" class="yellow-text text-lighten-3">Icons8</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        Copyright © 2020 Brad Meyer
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
#by {
  padding-left: .5em;
  padding-right: .5em;
}
</style>