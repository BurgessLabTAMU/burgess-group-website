<template>
  <div class="row">
    <div class="col col-md-3">
      <img :src="member.image" />
    </div>
    <div class="col col-md-9">
      <p class="fs-4">
        <strong>{{ member.name }}</strong>
      </p>
      <p v-if="member.education">
        <div>
          <strong>Education</strong>
        </div>
        <div v-for="(record,index) in member.education" :key="index">
          <div>{{ record }}</div>
        </div>
      </p>
      <p v-if="member.researchInterest">
        <div>
          <strong>Research interests</strong>
        </div>
        <div>{{ member.researchInterest }}</div>
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
}
</style>
