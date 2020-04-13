<template>
  <v-container fluid class="text-justify font-weight-light">
    <p class="display-1 text-center">Hi there, this is Julieta</p>
    <p>
      I am a health nut, nature bound and notoriously good at self-discipline. I tend to process things in
      <span
        class="highligh"
      >logical</span> rather than emotional ways and like to categorize information, which makes some aspects of life easier (and others trickier).
    </p>
    <p>
      I love
      <span class="highligh">debugging</span>, walking long distances, drinking a lot of water and being friends with non-human animals.
    </p>
    <p>
      I am a
      <span class="highligh">software developer</span> and my main goal is to make this a better world through my actions impact, so please contact me
      <span
        class="highligh"
      >only</span> if you really feel we can potentiate each other.
    </p>

    <v-col cols="12" class="text-center display-inline">
      <row v-for="item in links" v-bind:key="item.text">
        <v-btn text icon color="light" :href="item.href" target="_blank">
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
      </row>
    </v-col>
  </v-container>
</template>


<script>
export default {
  name: "HelloWorld",
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
        icon: "mdi-at",
        text: "mail",
        href:
          "mailto:julietaflux@gmail.com?subject=Hey, I saw your web page and..."
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
      }
    ]
  })
};
</script>

<style lang="sass">
.highligh
  background-color: rgba(255, 102, 0,.65)
  border: 1px rgba(255, 102, 0,.65)
  padding-right: 5px
  padding-left: 5px
</style>
