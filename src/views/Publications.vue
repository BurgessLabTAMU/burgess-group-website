<template>
  <div id="publications" class="container">
    <PageTitle title="Publications" />

    <div class="text-center">
      <p>
        Dr Burgess is the co-author of the monthly Highlights in
        <a href="https://onlinelibrary.wiley.com/journal/20476329"
          >Chemistry and Industry</a
        >
        since 1986; now contributing the Biomedical section.
      </p>
      <p><strong>H index 78 as of April 2020</strong></p>
      <p><strong>Complete List of Published Works available at:</strong></p>
      <div class="container" style="max-width: 500px;">
        <div class="row">
          <div class="col-4 text-center">
            <a href="https://orcid.org/0000-0001-6597-1842">
              <img class="logo" src="/orcid.jpeg" alt="orcid" /><br />
              ORCID
            </a>
          </div>
          <div class="col-4 text-center">
            <a
              href="https://www.ncbi.nlm.nih.gov/myncbi/1tINkobI4_pIps/bibliography/public/"
            >
              <img
                class="logo"
                src="/nih.png"
                alt="nih"
                style="margin-top: 14px; margin-bottom: 13px;"
              /><br />
              MyBibliography
            </a>
          </div>
          <div class="col-4 text-center">
            <a href="https://scholar.google.com/citations?user=0xlRve0AAAAJ">
              <img class="logo" src="/google.png" alt="google-scholar" /><br />
              Google Scholar
            </a>
          </div>
        </div>
      </div>
    </div>
    <hr />

    <h3>2021</h3>
    <div v-for="(paper, index) in $store.state.papers[2021]" :key="index">
      <PaperBox :paper="paper" />
    </div>
    <h3>2020</h3>
    <div v-for="(paper, index) in $store.state.papers[2020]" :key="index">
      <PaperBox :paper="paper" />
    </div>
    <h3>2019</h3>
    <div v-for="(paper, index) in $store.state.papers[2019]" :key="index">
      <PaperBox :paper="paper" />
    </div>
    <h3>2018</h3>
    <div v-for="(paper, index) in $store.state.papers[2018]" :key="index">
      <PaperBox :paper="paper" />
    </div>
    <h3>2017</h3>
    <div v-for="(paper, index) in $store.state.papers[2017]" :key="index">
      <PaperBox :paper="paper" />
    </div>
    <hr />

    <h3>Patents</h3>
    <ul v-for="(patent, index) in $store.state.patents" :key="index">
      <li>{{ patent }}</li>
    </ul>
    <hr />

    <h3>Books</h3>
    <ul v-for="(book, index) in $store.state.books" :key="index">
      <li>{{ book }}</li>
    </ul>
    <hr />

    <h3>Book reviews</h3>
    <ul v-for="(bookReview, index) in $store.state.bookReviews" :key="index">
      <li>{{ bookReview }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/PageTitle.vue";
import PaperBox from "@/components/PaperBox.vue";

export default defineComponent({
  name: "Publications",
  components: { PageTitle, PaperBox }
});
</script>

<style scoped>
.logo {
  max-width: 55px;
  max-height: 40px;
  width: auto;
  height: auto;
  margin-top: 10px;
  margin-bottom: 10px;
}

p {
  margin-bottom: 0.35rem;
}
</style>
