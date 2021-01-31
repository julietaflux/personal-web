<template>
  <div class="body-2 text-justify ">
    <p class="font-semibold text-2xl select-none">{{ title }}</p>
    <ul class="justify-center">
      <li class="my-3">
        <span class="flex text-sm font-bold">
          {{ artists }}
        </span>
      </li>
    </ul>
    <p class="mt-2 mb-4 text-sm md:text-lg select-none">{{ description }}</p>
    <ul class="justify-center">
      <li class="mb-3">
        <span
          class="flex text-sm font-bold cursor-pointer"
          @click="this.$emit('player')"
        >
          <IconPlay />
          Play preview
        </span>
      </li>
      <li class="mb-3">
        <span
          class="flex text-sm font-bold cursor-pointer"
          @click="this.$emit('art')"
        >
          <IconBolt />
          Album art
        </span>
      </li>

      <li>
        <a :href="publicUrl" target="_blank" rel="noopener noreferrer">
          <span class="flex text-sm font-bold cursor-pointer">
            <IconSpotify />
            Play on Spotify
          </span>
        </a>
      </li>
    </ul>
    <div class="my-5 md:lg-0">
      <template v-for="tag in tags" :key="tag">
        <span class="underline mx-1">#{{ tag }}</span>
      </template>
    </div>
  </div>
</template>

<script>
import IconPlay from "../components/icons/play";
import IconBolt from "../components/icons/bolt";
import IconSpotify from "../components/icons/spotify";
export default {
  name: "playlistinfocard",
  components: { IconPlay, IconBolt, IconSpotify },
  props: ["title", "description", "tags", "publicUrl", "artists"],
};
</script>
