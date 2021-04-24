<template>
  <div id="contact" class="container">
    <PageTitle title="Contact" />

    <div class="row">
      <div class="col-lg-6">
        <h3>PI</h3>
        <p>
          <strong> Kevin Burgess</strong> <br />
          <em
            >Texas A &amp; M University <br />
            Rachal Professor of Chemistry</em
          >
          <br />
          ILSB Building, Room 2161 <br />
          301 Old Main Drive <br />
          College Station, TX 77843-3474 <br />
          Cell: 979-845-4345 <br />
          Fax: 979-845-8839 <br />
          Email: <a href="mailto:burgess@tamu.edu">burgess@tamu.edu</a>
        </p>
        <h3>Assistant</h3>
        <p>
          <strong>Andrea Scott</strong> <br />
          <em>Administrative Assistant to Dr. Kevin Burgess</em> <br />
          Phone: 979-845-1847 <br />
          Email: <a href="mailto:ascott@mail.chem.tamu.edu">ascott@mail.chem.tamu.edu</a>
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
