<template>
  <div class="software-box">
    <div class="row">
      <div class="col-md-5">
        <img :src="software.graphical" />
      </div>
      <div class="col-md-7">
        <div class="fs-3 mb-3">
          <b>{{ software.title }}</b>
        </div>
        <div class="mb-4">
          {{ software.description }}
        </div>
        <div>
          <a
            v-if="software.github.length > 0"
            :href="software.github"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-outline-primary me-2"
          >
            Code
          </a>
          <a
            v-if="software.webapp.length > 0"
            :href="software.webapp"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-outline-primary me-2"
          >
            Webapp
          </a>
          <a
            v-if="software.reference.length > 0"
            :href="software.reference"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-outline-primary me-2"
          >
            Reference
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Software } from "@/types";

export default defineComponent({
  name: "SoftwareBox",
  props: {
    software: Object as PropType<Software>
  }
});
</script>

<style scoped>
.software-box {
  border-style: solid;
  border-width: 1pt;
  border-color: rgba(0, 0, 0, 0.15);
  width: 100%;
  padding: 5pt;
  padding-top: 10pt;
  padding-bottom: 20pt;
  margin-top: 0px;
  margin-bottom: 8px;
}

.software-box img {
  display: block;
  max-height: 250px;
  max-width: 100%;
  height: auto;
  width: auto;
  margin-left: auto;
  margin-right: auto;
}
</style>
