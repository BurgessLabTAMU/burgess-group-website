<template>
  <div id="software" class="container">
    <PageTitle title="Software" />
    <div v-for="(software, index) in $store.state.softwares" :key="index">
      <SoftwareBox :software="software" />
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
