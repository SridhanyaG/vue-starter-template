<template>
<div>
  <nprogress-container></nprogress-container>
  <main class="container-fluid">
    <NavBar v-if="$auth.check()"></NavBar>
    <section>
      <router-view></router-view>
    </section>
  </main>
  <footer>
<div class="row">
    <div class="col-md-6 col-sm-offset-4 col-md-offset-4">
      <small id="appSubFooter">COPYRIGHT &copy; 2018  <a href="//www.google.com" target="_blank">PRIVACY POLICY</a> </small>
    </div>
</div>
</footer>
</div>
</template>

<script>
import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
import NavBar from '../components/NavBar.vue'

export default {
  name: 'app',
  components: {
    NprogressContainer,
    NavBar
  },
  mounted () {
    window.notifier = this.$awn
  }
}
</script>

<style>
@import "~vue-awesome-notifications/dist/styles/style.css";
@import "~bootstrap/dist/css/bootstrap.css";

  /* Import Font Awesome Icons Set */
  $fa-font-path: '~font-awesome/fonts/';
  @import '~font-awesome/css/font-awesome.min.css';
</style>
<style lang="scss">
#appFooter {
  position: absolute;
  top: -70px;
}
</style>
