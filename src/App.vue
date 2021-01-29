<template>
  <div
    class="flex items-center px-6 py-16 dark:bg-gray-800 dark:text-white md:px-10 lg:px-48 min-h-full"
  >
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body,
#app {
  height: 100%;
}
</style>
