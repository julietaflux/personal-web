<template>
  <div class="m-auto text-center">
    <p class="text-xl font-semibold">This is Jules (WIP)</p>
    <div class="my-5">
      <p>
        I am a health nut, nature bound and notoriously good at self-discipline.
        I tend to process things in logical rather than emotional ways and like
        to categorize information.
      </p>
      <p>
        I love debugging , walking long distances, drinking a lot of water and
        being friends with non-human animals. I live according to a combination
        between Buddhism and Modern Stoicism values and like to walk my path
        along with people who respect the four cardinal virtues.
      </p>
      <p>
        I study Art Criticism and I am a software developer and IT as well, my
        main goal is to make this a better world and improve human and non human
        animals's life quality through my actions impact, so please contact me
        only if you really feel we can potentiate each other and make the world
        a better place.
      </p>
    </div>
    <ul class="flex justify-center">
      <li v-for="link in socialLinks" v-bind:key="link.text">
        <span class="mx-2">
          {{ link.text }}
        </span>
      </li>
    </ul>
    <p class="mt-32">
      PSST! Check the console.
    </p>
  </div>
</template>

<script>
import socialLinks from "../data/socialLinks";

export default {
  name: "Intro",
  data: () => ({
    socialLinks: socialLinks,
  }),
  methods: {
    Skills(
      languajes,
      dataBases,
      frameworks,
      designFrameworks,
      paradigms,
      environments,
      methodologies,
      versionControl,
      learning,
      others
    ) {
      this.Languajes = languajes;
      this.Databases = dataBases;
      this.Frameworks = frameworks;
      this.DesignFrameworks = designFrameworks;
      this.Paradigms = paradigms;
      this.Environments = environments;
      this.Methodologies = methodologies;
      this.VersionControl = versionControl;
      this.Learning = learning;
      this.Others = others;
    },
    Greet() {
      console.info("Glad you're here!");
      console.info("You may be wondering what stack I work with");

      var skills = new this.Skills(
        "C#, C++, JavaScript, TypeScript, CSS, SASS",
        "SQL, MySQL, MongoDB",
        ".NET Framework/Core, Vue.js, React.js, React Native",
        "Vuetify, Bootstrap, BootstrapVue, Bulma, Tailwindcss",
        "Functional, OOP",
        "Node.js",
        "Agile, Kanban, SCRUM",
        "Git, Git Flow, GitHub, GitLab, SVN",
        "Rust, p5.js, WebGL, OpenGL, Redis",
        "Linq"
      );

      console.table(skills);
      console.info(
        "I`m currently working in some personal projects as well:" + "\n"
      );
      console.log(
        "🚀 MercadoTrack - https://mercadotrack.com/" +
          "\n" +
          "Platform for helping Mercado Libre's users tracking article's price fluctuations over time."
      );
      console.log(
        "🐈 Refugiar - https://refugiar.org/" +
          "\n" +
          "Platform for helping animals's refuges with adoptions, improve diffusion and receive donations connecting the organizations, adoptants and volunteers in a simple and effective way."
      );
      console.log(
        "🌱 S33D - https://s33d.art/" + "\n" + "Generative art project."
      );
    },
  },
  mounted() {
    console.clear();
    this.Greet();
  },
};
</script>

<style lang="sass"></style>
