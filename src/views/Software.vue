<template>
  <div id="software" class="container">
    <PageTitle title="Software" />
    <div v-for="(software, index) in $store.state.softwares" :key="index">
      <SoftwareBox :software="software" />
    </div>
    <div class="text-center w-100 fs-4 mt-5">
      * Code by
      <a
        href="https://people.engr.tamu.edu/ioerger/index.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        Prof Thomas Ioerger
      </a>
      and integrated with molecular dynamics by
      <a href="https://lms.chem.tamu.edu/" target="_blank" rel="noopener noreferrer">
        Dr Lisa Perez</a
      >, both at TAMU.
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/PageTitle.vue";
import SoftwareBox from "@/components/SoftwareBox.vue";

export default defineComponent({
  name: "Software",
  components: { PageTitle, SoftwareBox }
});
</script>

<style scoped></style>
