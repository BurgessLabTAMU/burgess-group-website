<template>
  <div id="members" class="container">
    <PageTitle title="Members" />
    <h3>Current members</h3>
    <div v-for="(member, index) in $store.state.members" :key="index">
      <MemberInfo :member="member" />
    </div>
    <hr />
    <h3>Former members (since 2017)</h3>
    <ul>
      <li v-for="(member, index) in $store.state.formerMembers" :key="index">
        <strong>{{ member.name }}</strong>
        <span v-if="member.currentPosition">&nbsp;({{ member.currentPosition }})</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/PageTitle.vue";
import MemberInfo from "@/components/MemberInfo.vue";

export default defineComponent({
  name: "Members",
  components: { PageTitle, MemberInfo }
});
</script>

<style scoped>
h3 {
  margin-bottom: 1rem;
}
</style>
