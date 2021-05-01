<template>
  <div id="openings" class="container">
    <PageTitle title="Openings" />
    <embed
      src="job-description-tissue-culture.pdf"
      width="100%"
      height="1000px"
      type="application/pdf"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/PageTitle.vue";

export default defineComponent({
  name: "Openings",
  components: { PageTitle }
});
</script>

<style scoped></style>
