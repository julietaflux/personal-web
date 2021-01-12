<template>
  <v-app>
    <v-content>
      <v-container class="fill-height justify-center" fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Intro from "./components/Intro";

export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>
