<template>
  <v-card-text class="body-2 text-left pt-0">
    <p class="title font-weight-bold">{{ title }}</p>
    <p>{{ description }}</p>
  </v-card-text>
</template>

<script>
export default {
  name: "playlistcard",
  props: ["title", "description"],
};
</script>
