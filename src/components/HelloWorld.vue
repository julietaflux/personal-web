<template>
  <v-container fluid>
    <p class="font-weight-light display-1 text-center">Hi there</p>
    <p class="font-weight-light text-center">This is Jules Flux from Galaxy 934-F AKA Pandororbit.</p>
  </v-container>
</template>


<script>
export default {
  name: "HelloWorld",

  data: () => ({
    Links: [
      {
        text: "linked-in",
        href: "https://www.linkedin.com/in/julietaflux/"
      },
      {
        text: "github",
        href: "https://github.com/julietaflux"
      }
    ]
  })
};
</script>
