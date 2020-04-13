<template>
  <v-app>
    <v-content>
      <v-container class="fill-height justify-center" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <Intro />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Intro from "./components/Intro";

export default {
  name: "App",

  components: {
    Intro
  },

  data: () => ({
    //
  })
};
</script>
