<template>
  <div class="text-center mb-4">
    <h1>{{ title }}</h1>
    <hr />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageTitle",
  props: {
    title: String
  }
});
</script>

<style scoped>
h1 {
  font-family: "Raleway", sans-serif !important;
  font-weight: 700 !important;
  font-size: 2.5rem !important;
  margin: 1.5rem auto 1.5rem;
}

hr {
  color: rgba(0, 0, 0, 0.4);
}
</style>
