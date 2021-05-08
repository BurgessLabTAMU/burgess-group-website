<template>
  <div class="row mb-0">
    <div class="col col-md-6">
      <img :src="member.image" />
    </div>
    <div class="col col-md-6">
      <p class="fs-3">
        <strong>{{ member.name }}</strong>
      </p>
      <p class="fs-5">
        {{ member.position }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Member } from "@/types";

export default defineComponent({
  name: "MemberInfo",
  props: {
    member: Object as PropType<Member>
  }
});
</script>

<style scoped>
.row {
  margin-top: 10pt;
  margin-bottom: 10pt;
}

img {
  width: 100%;
  max-width: 250px;
}
</style>
