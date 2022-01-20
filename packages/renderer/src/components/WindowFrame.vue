<template>
  <slot />
</template>

<script setup lang="ts"></script>

<style scoped>
#topBar {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #150e3d;
  height: 25px;
  color: azure;
  -webkit-user-select: none;
  user-select: none;
  -webkit-app-region: drag;
}

#title-bar-btns {
  -webkit-app-region: no-drag;
  position: fixed;
  top: 0px;
  right: 6px;
}

#bottomBar {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #150e3d;
  height: 25px;
  color: azure;
  -webkit-user-select: none;
  user-select: none;
  -webkit-app-region: drag;
}
</style>
