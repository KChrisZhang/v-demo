<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  asyncData({ store, route }) {
    // 触发action后，返回promise
    // return store.dispatch('fetchItem', route.params.id);
  },
  computed: {
    // 从 store 的 state 对象中获取item
    // item() {
    // return this.$store.state.items[this.$route.params.id];
    // },
  },
};
</script>
