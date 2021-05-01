<template>
  <div id="research" class="container">
    <PageTitle title="Research" />
    <h3>Why do people join The Burgess Group?</h3>
    <p>
      The Burgess Group is for PhD students and postdocs who are interested in applying
      organic techniques to problems in biomedicinal chemistry involving small molecules
      that interact with cell surface receptors to impact disease states. We are
      particularly interested in new methods and approaches that could be used for drug
      design.
    </p>
    <h3>What we do.</h3>
    <p>
      Design new molecules to interact with cell surface proteins on diseased cells so
      that we can stimulate intracellular signaling, deliver bioactive substances with
      increased therapeutic indices, or image diseased cells via fluorescence or positron
      emission tomography.
    </p>
    <h3>
      How we do this.
    </h3>
    <p>
      Everybody in our group does molecular design and organic syntheses, though the
      amount of synthesis can vary from peptides and peptidomimetics only, to more
      sophisticated molecules. Group members then accumulate combinations of specialist
      skills that include: biophysical assays (<i>eg</i> fluorescence polarization and
      ELISA), tissue culture and cellular assays (<i>eg</i> FACS and Western blotting,
      intracellular imaging), or bioinformatics including data mining and perhaps some
      machine learning. Many students take courses outside the department of chemistry.
      Interested students can learn many of these techniques. Prior experience is not
      required: we can teach you. We collaborate with other research groups for
      <i>in vivo</i> work.
    </p>
    <hr />
    <h3>
      Illustrative Current Projects
    </h3>
    <p>
      Design of <i>cyclo</i>-organopeptides that interact with Trk receptors to impact
      dry-eye disease and neurotrophic keratitis.
    </p>
    <p>
      PROTACs to simultaneously degrade CDKs 2, 4, 6, and indirectly cyclins A, D, and E,
      to induce apoptosis in cancer cells by suppressing phosphoralation of retinoblastoma
      protein (Rb).
    </p>
    <p>
      Design of water-soluble near IR2 dyes for relatively deep tissue imaging of cancer
      via fluorescence and photoacoustic spectroscopies.
    </p>
    <p>
      Massively parallel molecular dynamics to match preferred conformations of
      <i>cyclo</i>-organopeptides with hot spots in protein ligands that are involved in
      protein-protein interactions.
    </p>
    <p>
      Development of machine learning methods to identify potential binding pockets on
      protein surfaces and suggest small molecules that may bind them.
    </p>
    <p>
      Synthetic Schellman turn and mimics to induce peptide helicity via capping for drug
      designs involving helical peptides at interfaces.
    </p>
    <p>
      Stapled helices formed from BODIPY-containing cyclic peptides, and their use in
      rapid screening of binding to cell surface receptors.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/PageTitle.vue";

export default defineComponent({
  name: "Research",
  components: { PageTitle }
});
</script>

<style scoped></style>
