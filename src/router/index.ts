import { createRouter, createWebHistory } from "vue-router";
import Contact from "@/views/Contact.vue";
import Home from "@/views/Home.vue";
import Members from "@/views/Members.vue";
import Openings from "@/views/Openings.vue";
import Publications from "@/views/Publications.vue";
import Research from "@/views/Research.vue";
import Software from "@/views/Software.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/rgroup/burgess/",
      alias: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/rgroup/burgess/contact",
      name: "Contact",
      component: Contact
    },
    {
      path: "/rgroup/burgess/members",
      name: "Members",
      component: Members
    },
    {
      path: "/rgroup/burgess/openings",
      name: "Openings",
      component: Openings
    },
    {
      path: "/rgroup/burgess/publications",
      name: "Publicationspublications",
      component: Publications
    },
    {
      path: "/rgroup/burgess/research",
      name: "Research",
      component: Research
    },
    {
      path: "/rgroup/burgess/software",
      name: "Software",
      component: Software
    }
  ]
});
