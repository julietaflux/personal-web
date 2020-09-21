<template>
  <v-container fluid class="text-center font-weight-light">
    <p class="display-1 text-center">This is Jules</p>
    <p>
      I am a health nut, nature bound and notoriously good at self-discipline. I tend to process things in
      <span
        class="highligh"
      >
        <span>logical</span>
      </span> rather than emotional ways and like to categorize information.
    </p>
    <p>
      I love
      <span class="highligh">
        <span>debugging</span>
      </span>, walking long distances, drinking a lot of water and being friends with non-human animals.
      I live according to a combination between
      <span
        class="highligh"
      >
        <span>Buddhism</span>
      </span> and
      <span class="highligh">
        <span>Modern Stoicism</span>
      </span> values and like to walk my path along with people who respect the four cardinal virtues.
    </p>
    <p>
      I study
      <span class="highligh">
        <span>Art Criticism</span>
      </span> and I am a
      <span class="highligh">
        <span>software developer</span>
      </span> and IT as well, my main goal is to make this a better world and improve people's life quality through my actions impact, so please contact me
      <span
        class="highligh"
      >
        <span>only</span>
      </span> if you really feel we can potentiate each other and make the world a better place.
    </p>

    <v-col cols="12" class="text-center display-inline">
      <row v-for="item in links" v-bind:key="item.text">
        <v-btn
          class="icon"
          text
          icon
          color="light"
          :href="item.href"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div v-if="item.icon">
            <v-icon>{{ item.icon }}</v-icon>
          </div>
          <div v-else>
            <v-img width="30" :src="item.img"></v-img>
          </div>
        </v-btn>
      </row>
    </v-col>

    <p class="footer text-center caption font-weight-light">PSST! Check the console.</p>
  </v-container>
</template>


<script>
import mtIcon from "../assets/mt.png";

export default {
  name: "Intro",
  data: () => ({
    links: [
      {
        icon: "mdi-linkedin",
        text: "linked-in",
        href: "https://www.linkedin.com/in/julietaflux/"
      },
      {
        icon: "mdi-github",
        text: "github",
        href: "https://github.com/julietaflux/"
      },
      {
        icon: "mdi-email",
        text: "mail",
        href:
          "mailto:julietaflux@gmail.com?subject=Hey, I saw your web page and..."
      },
      {
        icon: "mdi-at",
        text: "twitter",
        href: "https://twitter.com/fluxirl"
      },
      {
        icon: "mdi-sprout",
        text: "s33d",
        href: "https://www.s33d.art/"
      },
      {
        icon: "mdi-instagram",
        text: "instagram",
        href: "https://www.instagram.com/julietaflux/"
      },
      {
        img: mtIcon,
        text: "mercadotrack",
        href: "https://mercadotrack.com"
      }
    ]
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
      others,
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
      console.info("You may be wondering what my stack is");

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
    }
  },
  mounted() {
    console.clear();
    this.Greet();
  }
};
</script>

<style lang="sass">
.highligh
  cursor: default
  position: relative
  border: 1px rgba(148, 79, 226, .8)
  padding-right: 5px
  padding-left: 5px
  span
    position: relative
    z-index: 5
  &:hover
    &::before
      margin-top: 5px
      height: 18px
  &::before
    z-index: 0
    transition: all 1s
    transition-timing-function: cubic-bezier(.49,.67,.78,.2)
    content: ""
    background-color: rgba(148, 79, 226,.8)
    position: absolute
    height: 5px
    right: 0
    left: 0
    bottom: 0

.footer
  position: fixed
  left: 0
  bottom: 0
  width: 100%
  text-align: center

.icon
  margin: 2px
</style>
