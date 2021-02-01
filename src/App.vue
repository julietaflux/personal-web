<template>
  <div
    class="px-6 py-0 dark:bg-primary dark:text-white md:px-10 lg:px-48 min-h-full"
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
  font-family: Avenir, Fraunces, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body,
#app {
  height: 100%;
}

.fraunces {
  font-family: Fraunces;
}
</style>
