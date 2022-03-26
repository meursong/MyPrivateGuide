<template>
  <Header />
  <Header2 />
  <div id="content" class="content">
    <router-view></router-view>
  </div>
  <Footer />
</template>

<script>
import Header from "./components/layout/Header.vue";
import Header2 from "./components/layout/Header2.vue";
import Footer from "./components/layout/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Header2,
    Footer,
  },
};
</script>

<style></style>
