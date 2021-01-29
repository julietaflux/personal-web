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
        <div
          class="block md:grid grid-cols-2 gap-16 my-10 md:mt-15 pt-5 md:pt-10"
        >
          <div class="mt-15 md:mt-0">
            <PlaylistCard
              v-bind:title="playlist.title"
              v-bind:description="playlist.description"
            />
          </div>
          <div class="flex flex-shrink-0 items-center w-full">
            <iframe
              class="w-full flex-1 h-playlist-small md:h-playlist-medium shadow-lg"
              :src="playlist.url"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import playlists from "../data/playlistsLinks";
import PlaylistCard from "../components/PlaylistCard";
export default {
  name: "music",
  components: { PlaylistCard },
  data: () => ({
    playlists: playlists,
  }),
};
</script>
