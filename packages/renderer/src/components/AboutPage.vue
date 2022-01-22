<template>
  <div class="w-full">
    <h2 id="versions">Lib versions</h2>
    <div>
      <ul aria-labelledby="versions">
        <li v-for="(version, lib) in versions" :key="lib">
          <strong>{{ lib }}</strong> : v{{ version }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const versions = window.versions;
</script>

<style scoped>
div {
  text-align: left;
  display: grid;
  justify-content: center;
}
</style>
