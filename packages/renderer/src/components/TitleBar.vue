<template>
  <div class="titlebar" :class="[styleClass, stylePlatform]">
    <div class="titlebar-resize-handle top" />
    <div class="titlebar-resize-handle right" />
    <div class="titlebar-resize-handle left" />
    <div v-if="platform === 'darwin'" class="titlebar-buttons-osx">
      <div
        v-if="isClosable"
        class="macButton macButtonClose"
        @click="() => onClose"
      >
        <svg name="TitleBarCloseMac" width="12" height="12" viewBox="0 0 12 12">
          <path
            stroke="#4c0000"
            fill="none"
            d="M8.5,3.5 L6,6 L3.5,3.5 L6,6 L3.5,8.5 L6,6 L8.5,8.5 L6,6 L8.5,3.5 Z"
          />
        </svg>
      </div>
      <div
        v-if="isMinimizable"
        class="macButton macButtonMinimize"
        @click="() => onMinimize"
      >
        <svg
          name="TitleBarMinimizeMac"
          width="12"
          height="12"
          viewBox="0 0 12 12"
        >
          <rect
            fill="#975500"
            width="8"
            height="2"
            x="2"
            y="5"
            fill-rule="evenodd"
          />
        </svg>
      </div>
      <div
        v-if="isMaximizable"
        class="macButton macButtonMaximize"
        @click="() => onMaximize"
      >
        <svg
          name="TitleBarMaximizeMac"
          width="12"
          height="12"
          viewBox="0 0 12 12"
        >
          <g fill="#006500" fill-rule="evenodd">
            <path
              d="M5,3 C5,3 5,6.1325704 5,6.48601043 C5,6.83945045 5.18485201,7 5.49021559,7 L9,7 L9,6 L8,6 L8,5 L7,5 L7,4 L6,4 L6,3 L5,3 Z"
              transform="rotate(180 7 5)"
            />
            <path
              d="M3,5 C3,5 3,8.1325704 3,8.48601043 C3,8.83945045 3.18485201,9 3.49021559,9 L7,9 L7,8 L6,8 L6,7 L5,7 L5,6 L4,6 L4,5 L3,5 Z"
            />
          </g>
        </svg>
      </div>
    </div>

    <div class="titlebar-header">
      <div v-if="showIcon" class="titlebar-icon">
        <slot name="icon" />
      </div>

      <div v-if="showTitle" class="titlebar-name">
        <slot name="title" />
      </div>
    </div>

    <div v-if="platform !== 'darwin'" class="titlebar-menu">
      <div v-for="item of menu" :key="item" class="titlebar-menu-item">
        <button @click="() => item.click()">
          {{ item.label }}
        </button>
      </div>
    </div>

    <div v-if="platform !== 'darwin'" class="titlebar-buttons">
      <button
        v-if="isMinimizable"
        aria-label="minimize"
        title="Minimize"
        tabindex="-1"
        @click="onMinimize"
      >
        <svg aria-hidden="true" version="1.1" width="10" height="10">
          <path d="M 0,5 10,5 10,6 0,6 Z" />
        </svg>
      </button>
      <button
        v-if="isMaximizable"
        aria-label="maximize"
        title="Maximize"
        tabindex="-1"
        @click="onMaximize"
      >
        <svg aria-hidden="true" version="1.1" width="10" height="10">
          <path d="M 0,0 0,10 10,10 10,0 Z M 1,1 9,1 9,9 1,9 Z" />
        </svg>
      </button>
      <button
        v-if="isClosable"
        aria-label="close"
        title="Close"
        tabindex="-1"
        class="close"
        @click="onClose"
      >
        <svg aria-hidden="true" version="1.1" width="10" height="10">
          <path
            d="M 0,0 0,0.7 4.3,5 0,9.3 0,10 0.7,10 5,5.7 9.3,10 10,10 10,9.3 5.7,5 10,0.7 10,0 9.3,0 5,4.3 0.7,0 Z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useElectron } from "../use/electron";

export default defineComponent({
  props: {
    theme: {
      type: String,
      default: "light",
    },
    platform: {
      type: String,
      required: true,
    },
    menu: {
      type: Array as () => Array<unknown>,
      default: () => Array,
    },
    isMinimizable: {
      type: Boolean,
      default: true,
    },
    isMaximizable: {
      type: Boolean,
      default: true,
    },
    isClosable: {
      type: Boolean,
      default: true,
    },
    showIcon: {
      type: Boolean,
      default: true,
    },
    showTitle: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const { minimize, maximize, close } = useElectron();

    const styleClass = `titlebar-style-${props.theme}`;
    const stylePlatform = `titlebar-platform-${props.platform}`;

    const onMinimize = (e: Event) => {
      return minimize(e);
    };

    const onMaximize = (e: Event) => {
      return maximize(e);
    };

    const onClose = (e: Event) => {
      return close(e);
    };
    return {
      styleClass,
      stylePlatform,
      onMinimize,
      onMaximize,
      onClose,
    };
  },
});
</script>
<style lang="css">
.titlebar {
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  height: 28px;
  -webkit-app-region: drag;
  backdrop-filter: blur(15px);
}
.titlebar.titlebar-style-dark {
  color: #fff;
  background-color: #010201;
}
.titlebar.titlebar-style-light {
  color: #2c2c2c;
  background-color: #e8e2e3da;
}
.titlebar .titlebar-resize-handle {
  position: absolute;
  top: 0;
  left: 0;
  -webkit-app-region: no-drag;
}
.titlebar .titlebar-resize-handle.top {
  width: 100%;
  height: 3px;
}
.titlebar .titlebar-resize-handle.right {
  left: auto;
  right: 0;
  width: 3px;
  height: 28px;
}
.titlebar .titlebar-resize-handle.left {
  width: 3px;
  height: 28px;
}
.titlebar .titlebar-header {
  display: flex;
  align-items: center;
  justify-content: center;
}
.titlebar .titlebar-icon,
.titlebar .titlebar-name {
  display: flex;
  align-content: center;
  align-self: center;
  flex-grow: 0;
  flex-shrink: 0;
  font-size: 14px;
  line-height: 28px;
  padding: 0 12px;
  height: 28px;
}
.titlebar .titlebar-icon > svg,
.titlebar .titlebar-name > svg,
.titlebar .titlebar-icon > img,
.titlebar .titlebar-name > img {
  display: block;
  align-content: center;
  align-self: center;
  width: auto;
  height: 16px;
}
.titlebar .titlebar-icon ~ .titlebar-name {
  padding-left: 0;
}
.titlebar.titlebar-platform-darwin .titlebar-header {
  width: 100%;
  text-align: center;
  position: absolute;
  pointer-events: none;
}
.titlebar .titlebar-menu {
  display: flex;
  -webkit-app-region: no-drag;
  align-items: center;
}
.titlebar .titlebar-menu .titlebar-menu-item {
  min-width: 0;
  position: relative;
  cursor: pointer;
  margin: 0.2em;
}
.titlebar .titlebar-menu .titlebar-menu-item button {
  border: none;
  box-shadow: none;
  background: transparent;
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 0.5em;
  color: currentColor;
  font-size: 13px;
  padding: 0.3em 0.6em;
  outline: none;
  transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 800ms;
}
.titlebar .titlebar-menu .titlebar-menu-item button:hover {
  background-color: #808080a1;
}
.titlebar .titlebar-buttons {
  display: flex;
  flex-direction: row;
  flex-grow: 0;
  flex-shrink: 0;
  margin-left: auto;
  align-items: center;
}
.titlebar .titlebar-buttons button {
  -webkit-app-region: no-drag;
  display: inline-block;
  position: relative;
  width: 25px;
  height: 75%;
  padding: 0;
  margin: 0.14em;
  overflow: hidden;
  border: none;
  box-shadow: none;
  border-radius: 0.5em;
  color: currentColor;
  background-color: transparent;
  line-height: 10px;
  outline: none;
  transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 800ms;
}
.titlebar .titlebar-buttons button.close {
  margin-right: 0.3em;
}
.titlebar .titlebar-buttons button svg {
  fill: currentColor;
}
.titlebar .titlebar-buttons button:hover {
  background-color: #808080a1;
  color: currentColor;
}
.titlebar .titlebar-buttons button.close:hover {
  background-color: #e81123;
  color: #fff;
}
.titlebar .titlebar-buttons-osx {
  display: flex;
  box-sizing: border-box;
  padding: 10px;
  width: 70px;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: center;
}
.titlebar .titlebar-buttons-osx .macButton {
  -webkit-app-region: no-drag;
  -webkit-box-sizing: border-box;
  border-radius: 50%;
  box-sizing: border-box;
  height: 12px;
  width: 12px;
  background-color: #dcdcdc;
  border-color: #d1d1d1;
}
.titlebar .titlebar-buttons-osx .macButton.macButtonClose {
  background-color: #fc615d;
}
.titlebar .titlebar-buttons-osx .macButton.macButtonMinimize {
  background-color: #fdbc40;
}
.titlebar .titlebar-buttons-osx .macButton.macButtonMaximize {
  background-color: #34c749;
}
.titlebar .titlebar-buttons-osx .macButton svg {
  display: block;
  visibility: hidden;
}
.titlebar .titlebar-buttons-osx:hover .macButton svg {
  visibility: visible;
}
</style>
