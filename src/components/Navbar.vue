<template>
  <nav id="navbar" class="navbar navbar-expand-lg navbar-dark mb-auto ps-3 pe-3">
    <!-- Navbar title -->
    <router-link to="/rgroup/burgess/" class="navbar-brand me-auto">
      The Burgess Lab
    </router-link>
    <!-- Toggler botton-->
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbar-toggler"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- Links -->
    <div class="collapse navbar-collapse" id="navbar-toggler">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <router-link to="/rgroup/burgess/research" class="nav-link"
            >Research</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/rgroup/burgess/members" class="nav-link">Members</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/rgroup/burgess/publications" class="nav-link">
            Publications
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/rgroup/burgess/software" class="nav-link">
            Software
          </router-link>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="http://www.byinquisition.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Books
          </a>
        </li>
        <li class="nav-item">
          <router-link to="/rgroup/burgess/contact" class="nav-link">Contact</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/rgroup/burgess/openings" class="nav-link">
            Openings
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar"
});
</script>

<style scoped>
h1 {
  font-family: "Raleway", sans-serif !important;
  font-weight: 700 !important;
}

.navbar {
  background-color: #343a40;
}

.nav-link {
  margin-left: 0.5rem;
  padding: 0.25rem 0;
  color: rgba(255, 255, 255, 0.5);
  background-color: transparent;
  border-bottom: 0.25rem solid transparent;
}

.nav-link:hover {
  border-bottom-color: rgba(255, 255, 255, 0.25);
}

.router-link-active {
  color: #fff !important;
  border-bottom-color: #fff;
}
</style>
