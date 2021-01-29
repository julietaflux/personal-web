<template>
  <div class="body-2 text-justify ">
    <p class="font-semibold text-xl">{{ title }}</p>
    <p class="mt-2 mb-4 text-sm">{{ description }}</p>
    <div class="mb-4 md:lg-0">
      <span class="underline mx-1">#gender</span>
      <span class="underline mx-1">#artist</span>
      <span class="underline mx-1">#period</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "playlistcard",
  props: ["title", "description"],
};
</script>
