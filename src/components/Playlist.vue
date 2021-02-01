<template>
  <div class="block md:grid grid-cols-2 gap-10 my-10 md:mt-15 pt-5 md:pt-10">
    <div class="mt-15 md:mt-0">
      <PlaylistInfoCard
        :title="playlist.title"
        :description="playlist.description"
        :tags="playlist.tags"
        :publicUrl="playlist.publicUrl"
        :artists="playlist.artists"
        v-on:player="showPlayerBox"
        v-on:art="showArtBox"
      />
    </div>
    <div class="flex flex-shrink-0 items-center md:justify-end w-full">
      <div class="w-full md:w-auto">
        <img
          v-if="this.showArt"
          :class="{ hue: playlist.hue }"
          class="p-2 md:p-0 md:w-art-medium lg:w-art-large"
          :src="`/art/${playlist.image}`"
        />

        <iframe
          v-if="this.showPlayer"
          class="shadow-lg w-full flex-1 h-playlist-small md:h-playlist-medium md:w-playlist-medium lg:h-playlist-large lg:w-playlist-large"
          :src="playlist.url"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import PlaylistInfoCard from "../components/PlaylistInfoCard";

export default {
  name: "music",
  components: { PlaylistInfoCard },
  props: ["playlist"],
  data: () => ({
    showPlayer: false,
    showArt: true,
  }),
  methods: {
    togglePlaylistStyle() {
      this.showPlayer = !this.showPlayer;
      this.showArt = !this.showArt;
    },
    showPlayerBox() {
      this.showPlayer = true;
      this.showArt = false;
    },
    showArtBox() {
      this.showPlayer = false;
      this.showArt = true;
    },
  },
};
</script>

<style lang="scss">
.hue {
  filter: hue-rotate(80deg);
}
</style>
