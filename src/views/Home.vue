<template>
  <div id="home" class="bg-image d-flex align-items-center">
    <div class="container text-center" style="padding-bottom: calc(15%);">
      <h1 class="mb-4">The Burgess Lab</h1>
      <h4 class="mb-5">Organic and Medicinal Chemistry</h4>
      <p>
        <router-link to="/research" class="btn btn-lg btn-outline-light me-2">
          Our research
        </router-link>
        <router-link to="/contact" class="btn btn-lg btn-outline-light ms-2">
          Get in touch
        </router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {}
});
</script>

<style scoped>
#home {
  height: calc(100vh - 56px);
  background-color: #333;
  color: #fff;
}

h1,
h4 {
  font-family: "Raleway", sans-serif;
  font-weight: 700;
}

h1 {
  font-size: 4rem;
}

.bg-image {
  background: linear-gradient(rgba(20, 20, 20, 0), rgba(20, 20, 20, 0.8)),
    url("../../public/bg-2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>
