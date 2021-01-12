<template>
  <div width="400">
    <v-card-title>
      <span class="title font-weight-bold">{{ title }}</span>
    </v-card-title>

    <v-card-text class="body-2 text-left">
      {{ description }}
    </v-card-text>
  </div>
</template>

<script>
export default {
  name: "playlistcard",
  props: ["title", "description"],
};
</script>
