<template>
  <div id="publications" class="container">
    <PageTitle title="Publications" />

    <div class="text-center">
      <p class="fs-3 mb-3"><strong>H-index 81 as of May 2021</strong></p>
      <p class="fs-5 mb-3">
        <strong>complete, and most updated, list of published works available at:</strong>
      </p>
      <div class="row mx-auto" style="max-width: 500px;">
        <div class="col-4 text-center">
          <a
            href="https://orcid.org/0000-0001-6597-1842"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img class="logo" src="/orcid.jpeg" alt="orcid" /><br />
            ORCID
          </a>
        </div>
        <div class="col-4 text-center">
          <a
            href="https://www.ncbi.nlm.nih.gov/myncbi/1tINkobI4_pIps/bibliography/public/"
            target="_blank"
            rel="noopener noreferrer"
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
          <a
            href="https://scholar.google.com/citations?user=0xlRve0AAAAJ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img class="logo" src="/google.png" alt="google-scholar" /><br />
            Google Scholar
          </a>
        </div>
      </div>
      <p class="fs-5 mt-4 pt-3">
        Dr Burgess is the co-author of the monthly Highlights in
        <a
          href="https://onlinelibrary.wiley.com/journal/20476329"
          target="_blank"
          rel="noopener noreferrer"
          >Chemistry and Industry</a
        >
        since 1986;<br />
        see the Biomedical section of that column.
      </p>
      <p class="fs-5 mt-4 pt-2">
        He is author of three workbooks for teaching:<br />
        <a
          href="http://www.byinquisition.org/adv.php"
          target="_blank"
          rel="noopener noreferrer"
          >Organic Chemistry By Inquisition (for graduate students)</a
        ><br />

        <a
          href="http://www.byinquisition.org/index.php"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sophomore Organic Chemistry By Inquisition 1</a
        >
        and
        <a
          href="http://www.byinquisition.org/sophomore2.php"
          target="_blank"
          rel="noopener noreferrer"
          >2</a
        >
      </p>
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
