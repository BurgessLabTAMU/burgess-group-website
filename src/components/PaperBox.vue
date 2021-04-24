<template>
  <div class="pub-box">
    <div>
      <a :href="paper.url">
        {{ paper.title }}
      </a>
    </div>
    <div>
      {{ paper.authors }}
    </div>
    <div>
      <i>{{ paper.journal }}</i> , <strong>{{ paper.year }}</strong> , {{ paper.details }}
    </div>
    <img :src="paper.graphical" width="40%" height="40%" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Paper } from "@/types";

export default defineComponent({
  name: "PaperBox",
  props: {
    paper: Object as PropType<Paper>
  }
});
</script>

<style scoped>
.pub-box {
  border-style: solid;
  border-width: 1pt;
  /* border-color: navy; */
  border-color: rgba(0, 0, 0, 0.15);
  width: 100%;
  padding: 5pt;
  margin-top: 0px;
  margin-bottom: 8px;
}

.pub-box img {
  display: block;
  max-height: 250px;
  max-width: 500px;
  height: auto;
  width: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
