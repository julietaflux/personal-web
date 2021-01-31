<template>
  <div
    class="h-60 w-96 bg-black rounded-lg overflow-hidden text-gray-100 font-mono text-sm"
    style="background-color: #1e1e1e"
  >
    <!-- Parte de arriba -->
    <div class="h-7 flex items-center" style="background-color: #2d2d2d">
      <div class="px-3 grid grid-flow-col gap-2">
        <div class="h-3 w-3 bg-red-400 rounded-full"></div>
        <div class="h-3 w-3 bg-yellow-400 rounded-full"></div>
        <div class="h-3 w-3 bg-green-400 rounded-full"></div>
      </div>
      <div class="flex-1 text-center">Terminal</div>
      <div class="w-20"></div>
    </div>
    <div style="height: calc(100% - 1.75rem);">
      <!-- Aca va el contenido -->
    </div>
  </div>
</template>
