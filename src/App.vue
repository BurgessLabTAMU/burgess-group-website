<template>
  <div>
    <Navbar />
    <router-view class="pb-5" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";

export default defineComponent({
  name: "App",
  components: { Navbar }
});
</script>

<style>
body {
  /* font-family: "Montserrat", sans-serif !important; */
  font-family: "Roboto", sans-serif !important;
  font-size: 1.1rem !important;
  font-weight: 500 !important;
  overflow-y: scroll;
}

h3 {
  font-family: "Raleway", sans-serif !important;
  font-weight: 700 !important;
}

strong {
  font-weight: 700;
}

hr {
  color: rgba(0, 0, 0, 0.4) !important;
}

a {
  text-decoration: none !important;
}

.container {
  max-width: 1140px !important;
}
</style>
