<template>
  <div class="m-auto text-center md:mx-36 select-none">
    <p class="text-xl font-semibold">This is Jules</p>
    <div class="my-5">
      <p class="mb-2">
        I am a health nut, nature bound and notoriously good at self-discipline.
        I tend to process things in logical rather than emotional ways and like
        to categorize information.
      </p>
      <p class="mb-2">
        I make a lot of playlists and my hobbies include debugging, walking long
        distances, drinking a lot of water and being friends with non-human
        animals. I live according to a combination between
        <span class="font-semibold">Buddhism</span> and
        <span class="font-semibold">Modern Stoicism</span> values and like to
        walk my path along with people who respect the four cardinal virtues.
      </p>
      <p>
        I study <span class="font-semibold">Art Criticism</span> and I am a
        software developer and IT as well, my main goal is to make this a better
        world and improve human and non human animals's life quality through my
        actions impact, so please contact me
        <span class="font-semibold">only</span> if you really feel we can
        potentiate each other and make the world a better place.
      </p>
    </div>
    <div class="mt-5 mb-10">
      <ul
        class="flex flex-col md:flex-row items-center mb-5 justify-center cursor-pointer"
      >
        <li v-for="link in socialLinks" v-bind:key="link.text">
          <a :href="link.href" target="_blank" rel="noopener noreferrer">
            <div class="flex mx-3 my-2 md:my-0 text-sm font-bold">
              <component v-bind:is="link.iconComponent"></component>
              {{ link.text }}
            </div>
          </a>
        </li>
      </ul>
      <ul class="flex justify-center cursor-pointer">
        <li v-for="link in proyectsLinks" v-bind:key="link.text">
          <a :href="link.href" target="_blank" rel="noopener noreferrer">
            <div class="flex mx-3 text-sm font-bold">
              <component v-bind:is="link.iconComponent"></component>
              {{ link.text }}
            </div>
          </a>
        </li>
      </ul>
    </div>
    <p class="text-xs">
      PSSST! Check the console.
    </p>
  </div>
</template>

<script>
import socialLinks from "../data/socialLinks";
import proyectsLinks from "../data/proyectsLinks";
import IconCap from "../components/icons/cap";
import IconChart from "../components/icons/chart";
import IconSparks from "../components/icons/sparks";
import IconMail from "../components/icons/mail";
import IconCode from "../components/icons/code";
import IconSquares from "../components/icons/squares";

export default {
  name: "Intro",
  components: {
    IconCap,
    IconChart,
    IconSparks,
    IconMail,
    IconCode,
    IconSquares,
  },
  data: () => ({
    socialLinks: socialLinks,
    proyectsLinks: proyectsLinks,
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
