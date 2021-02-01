<template>
  <div class="flex flex-col min-h-screen">
    <ul class="flex justify-center text-sm my-3">
      <li v-for="link in socialLinks" v-bind:key="link.text">
        <a :href="link.href" target="_blank" rel="noopener noreferrer">
          <span class="cursor-pointer flex mx-3 text-md font-medium">
            {{ link.text }}
          </span>
        </a>
      </li>
    </ul>

    <div class="m-auto text-center md:mx-36 select-none">
      <p
        @click="toggleIntro"
        :class="intro ? 'text-3xl' : 'text-6xl'"
        class=" font-medium fraunces"
      >
        Hi there, I'm Julieta
      </p>
      <div class="my-5 text-md" v-if="intro">
        <p class="mb-2">
          I am a health nut, nature bound and notoriously good at
          self-discipline. I tend to process things in logical rather than
          emotional ways and like to categorize information.
        </p>
        <p class="mb-2">
          I make a ton of playlists and some of hobbies include debugging,
          drawing, walking long distances, drinking a lot of water and being
          friends with non-human animals. I live according to a combination
          between
          <span class="font-semibold fraunces">Buddhism</span> and
          <span class="font-semibold fraunces">Modern Stoicism</span> values and
          like to walk my path along with people who respect the four cardinal
          virtues.
        </p>
        <p>
          I study <span class="font-semibold fraunces">Art Criticism</span> and
          I am a software developer and IT, my main goal is to make this a
          better world and improve human and non human animals's life quality,
          so please contact me
          <span class="font-semibold fraunces">only</span> if you really feel we
          can potentiate each other and make the world a better place.
        </p>
      </div>
    </div>

    <ul class="flex justify-center text-sm my-3">
      <li v-for="link in proyectsLinks" v-bind:key="link.text">
        <a :href="link.href" target="_blank" rel="noopener noreferrer">
          <span class="cursor-pointer flex mx-3 text-sm font-medium">
            {{ link.text }}
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import socialLinks from "../data/socialLinks";
import proyectsLinks from "../data/proyectsLinks";

export default {
  name: "Intro",
  components: {},
  data: () => ({
    intro: false,
    socialLinks: socialLinks,
    proyectsLinks: proyectsLinks,
  }),
  methods: {
    toggleIntro() {
      this.intro = !this.intro;
      console.log("lala");
    },
    scroll() {
      console.log("PANDORO");
    },
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
    //console.clear();
    //this.Greet();
    setTimeout(() => (this.intro = true), 4000);
  },
  unmounted() {
    console.log("unmounted...");
    window.removeEventListener("scroll", this.scroll);
  },
};
</script>
