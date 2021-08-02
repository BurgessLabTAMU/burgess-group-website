<template>
  <div id="contact" class="container">
    <PageTitle title="Contact" />

    <div class="row">
      <div class="col-lg-6">
        <div class="fs-3">
          <b>Kevin Burgess</b>
        </div>
        <p>
          Texas A &amp; M University <br />
          Rachal Professor of Chemistry
          <br />
          ILSB Building, Room 2161 <br />
          301 Old Main Drive <br />
          College Station, TX 77843-3474 <br />
          Cell: 979-845-4345 <br />
          Fax: 979-845-8839 <br />
          Email: <a href="mailto:burgess@tamu.edu">burgess@tamu.edu</a>
        </p>
        <div>
          <a
            href="https://twitter.com/kevinburgesslab?lang=en"
            class="btn btn-lg btn-outline-primary d-flex align-items-center justify-content-center"
            style="width: 275px;"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-twitter"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                />
              </svg>
            </div>
            <div class="ms-3">Follow us on Twitter</div>
          </a>
        </div>
        <div class="fs-3 mt-4">
          <b>Andrea Scott</b>
        </div>
        <p>
          Administrative Assistant to Dr. Kevin Burgess <br />
          Phone: 979-845-1847 <br />
          Email: <a href="mailto:ascott@mail.chem.tamu.edu">ascott@chem.tamu.edu</a>
          <br />
          Hours: 1:00 pm to 5:00 pm Monday through Friday
        </p>
      </div>
      <div class="col-lg-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.6996599088525!2d-96.34589768385473!3d30.614233581678644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8646834c6e2a1ecd%3A0xe79d159e7a64c493!2sILSB+BUILDING!5e0!3m2!1sen!2sus!4v1563131785274!5m2!1sen!2sus"
          width="100%"
          height="400"
          frameborder="0"
          style="border:0"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <hr />

    <h3>Perspective students</h3>
    <p>
      Yes! We have vacancies for bright and self-motivated graduate students every year.
    </p>
    <p>
      If you are specifically interested in our research at Texas A &amp; M, please
      <a href="mailto:burgess@tamu.edu">email Dr Burgess directly</a>. If you have a
      fellowship from your home country that provides full or partial support for your
      stay at TAMU, make that absolutely clear in your email. Please note, Dr. Burgess
      does not oversee the admissions process. To join The Burgess Group as a graduate
      student, you must first be accepted into the Chemistry PhD program at TAMU. Dr.
      Burgess cannot accept any students unless you are accepted into the PhD program.
    </p>
    <p>
      To make an application, please follow
      <a href="https://www.chem.tamu.edu/graduate/">this procedure</a>.
    </p>
    <p>
      <strong>US Citizens And Green Card Holders</strong><br />
      Your GPA and GRE scores are critical for admission.
    </p>
    <p>
      <strong>For All Other Applicants</strong><br />
      TOEFL and GRE scores are absolutely critical. Some students apply who have excellent
      research papers from undergraduate or MS research, but this will not help if these
      scores are low. Students who take these exam and do not score well, please try
      again! Send the scores in even if it is after the official deadline. Aim for over
      600 in the TOEFL test. Of course, if you have a fellowship that provides full or
      partial support for your stay at TAMU, make that absolutely clear in the
      application.
    </p>
    <hr />

    <h3>Postdocs</h3>
    <p>
      We are searching for self-motivated people to join the group in the immediate
      future. In particular, we need people with good synthetic skills, but other
      expertise is welcome. This could include experience with peptides, peptidomimetics,
      calculations on biological molecules, some research history involving manipulation
      of proteins, or with fluorescent dyes.
    </p>
    <p>
      Interested applicants please email in pdf format:
    </p>
    <ul>
      <li>Complete CV showing all previous and current research mentors</li>
      <li>List of publications</li>
      <li>Summary of previous research</li>
    </ul>
    <p>
      Please indicate the date you will be available. It accelerates the process if
      applications are accompanied by letters of recommendation from research mentors.
    </p>
    <p>
      We apologize in advance, but we cannot respond to all applications.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/PageTitle.vue";

export default defineComponent({
  name: "Contact",
  components: { PageTitle }
});
</script>

<style scoped></style>
