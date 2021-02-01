<template>
  <div class="py-16">
    <div class="grid gap-20">
      <!-- no se como se poner el divider, no me anda, pero deberia ir en este elemento, con su respectivo padding si hace falta -->
      <div v-for="playlist in playlists" :key="playlist">
        <Playlist :playlist="playlist" />
      </div>
    </div>
  </div>
</template>

<script>
import Playlist from "../components/Playlist";
import playlists from "../data/playlistsLinks";

export default {
  name: "music",
  components: { Playlist },
  data: () => ({
    playlists: playlists,
  }),
};
</script>
