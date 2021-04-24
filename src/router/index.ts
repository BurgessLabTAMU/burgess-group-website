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
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact
    },
    {
      path: "/members",
      name: "Members",
      component: Members
    },
    {
      path: "/openings",
      name: "Openings",
      component: Openings
    },
    {
      path: "/publications",
      name: "Publicationspublications",
      component: Publications
    },
    {
      path: "/research",
      name: "Research",
      component: Research
    },
    {
      path: "/software",
      name: "Software",
      component: Software
    }
  ]
});
