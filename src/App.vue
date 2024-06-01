<template>
  <div id="app">
    <div class="bg-light lg:flex lg:justify-center lg:gap-14 pb-10">
      <Intro />
      <router-view></router-view>
    </div>
    <FooterComp />
  </div>
</template>

<script>
  import Intro from './components/Intro.vue';
  import FooterComp from './components/FooterComp.vue';

  export default {
    name: 'App',
    components: {
      Intro,
      FooterComp
    }
  };
</script>

<style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
