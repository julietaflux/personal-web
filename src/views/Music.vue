<template>
  <div>
    <div class="flex justify-end">
      <iframe
        src="https://open.spotify.com/follow/1/?uri=spotify:user:julietaflux&size=detail&theme=dark"
        width="205"
        height="56"
        scrolling="no"
        frameborder="0"
        style="border:none; overflow:hidden;"
        allowtransparency="true"
      ></iframe>
    </div>
    <div class="divide-y divide-gray-300 divide divide-opacity-25">
      <template v-for="playlist in playlists" :key="playlist">
        <Playlist v-bind:playlist="playlist" />
      </template>
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
