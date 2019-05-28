<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <!-- <About></About> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import About from './About';
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    // About,
    HelloWorld,
  },
};
</script>
