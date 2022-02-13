<template>
  <div class="background-img" />
  <div class="container">
    <div class="page-header">
      <title-bar
        :theme="props.theme"
        :platform="props.platform"
        :show-title="props.showTitle"
        :show-icon="props.showIcon"
        :is-minimizable="props.isMinimizable"
        :is-maximizable="props.isMaximizable"
        :is-closable="props.isClosable"
        :menu="props.menu"
      >
        <template v-slot:icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              fill="currentColor"
              d="M437.2 403.5L320 215V64h8c13.3 0 24-10.7 24-24V24c0-13.3-10.7-24-24-24H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h8v151L10.8 403.5C-18.5 450.6 15.3 512 70.9 512h306.2c55.7 0 89.4-61.5 60.1-108.5zM137.9 320l48.2-77.6c3.7-5.2 5.8-11.6 5.8-18.4V64h64v160c0 6.9 2.2 13.2 5.8 18.4l48.2 77.6h-172z"
              class
            />
          </svg>
        </template>

        <template v-slot:title>Conver</template>
      </title-bar>
    </div>
    <div class="page-sidebar">
      <app-navigation />
    </div>
    <div class="page-content">
      <router-view />
    </div>
    <div class="page-footer">
      <bottom-bar
        :theme="props.theme"
        :platform="props.platform"
        :show-title="props.showTitle"
        :show-icon="props.showIcon"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useElectron } from "./use/electron";
import AppNavigation from "/@/components/AppNavigation.vue";
import TitleBar from "/@/components/TitleBar.vue";
import BottomBar from "/@/components/FooterComponent.vue";

const { isMinimizable, isMaximizable, isClosable } = useElectron();

interface AppProps {
  theme: string;
  platform: string;
  showTitle: boolean;
  showIcon: boolean;
  isMaximizable: () => boolean;
  isMinimizable: () => boolean;
  isClosable: () => boolean;
  menu: { label: string; click: () => void }[];
}

const props: AppProps = {
  platform: "windows",
  theme: "dark",
  showTitle: true,
  showIcon: true,
  isMaximizable: isMaximizable,
  isMinimizable: isMinimizable,
  isClosable: isClosable,
  menu: [
    {
      label: "About",
      click: function () {
        console.log("Pressed item 2");
      },
    },
  ],
};
</script>

<style type="css">
@font-face {
  font-family: "Montserrat", sans-serif;
  src: url("../assets/fonts/Montserrat-Regular.ttf"),
    url("../assets/fonts/Montserrat-Medium.ttf"),
    url("../assets/fonts/Montserrat-Bold.ttf");
}

#app {
  font-family: "Segoe UI", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 12pt;
}
body {
  margin: 0;
  text-align: center;
  color: #383738;
  line-height: 1.6;
  user-select: none;
  overflow: hidden;
  padding: 0;
}

.w-full {
  width: 100%;
  height: 100%;
}

.background-img {
  /* background: url("../assets/img/2.jpg") center/cover;
  background-size: cover;
  filter: blur(2rem);
  */
  background-color: #f5eeef;
  position: absolute;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  z-index: -10;
  transform: scale(1.15);
}

.container {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 200px 1fr;
  grid-template-areas:
    "header header"
    "sidebar main"
    "sidebar footer";
}

.page-header {
  grid-area: header;
}

.page-content {
  grid-column: main;
  padding: 1em;
}

.page-sidebar {
  grid-row: sidebar;
  border-right: 1px solid rgba(252, 252, 252, 0.336);
  background-color: #e8e2e3;
}

.page-footer {
  grid-column: footer;
}
</style>
