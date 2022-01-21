<template>
  <div class="footer" :class="[styleClass, stylePlatform]">
    <div class="footer-resize-handle bottom" />
    <div class="footer-resize-handle right" />
    <div class="footer-resize-handle left" />

    <div class="footer-header">
      <div v-if="showTitle" class="footer-name">Made with ❤️ by crstnmac</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  theme: {
    type: String,
    default: "light",
  },
  platform: {
    type: String,
    required: true,
    default: "",
  },
  showIcon: {
    type: Boolean,
    default: true,
  },
  showTitle: {
    type: Boolean,
    default: true,
  },
});

const styleClass = `footer-style-${props.theme}`;
const stylePlatform = `footer-platform-${props.platform}`;
</script>
<style lang="css">
.footer {
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  height: 28px;
  -webkit-app-region: drag;
}
.footer.footer-style-dark {
  color: #fff;
  background-color: #111010da;
}
.footer.footer-style-light {
  color: #2c2c2c;
  background-color: #e8e2e3da;
}
.footer .footer-resize-handle {
  position: absolute;
  bottom: 0;
  left: 0;
  -webkit-app-region: no-drag;
}
.footer .footer-resize-handle.bottom {
  width: 100%;
  height: 3px;
}
.footer .footer-resize-handle.right {
  left: auto;
  right: 0;
  width: 3px;
  height: 28px;
}
.footer .footer-resize-handle.left {
  width: 3px;
  height: 28px;
}
.footer .footer-header {
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer .footer-icon,
.footer .footer-name {
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
.footer .footer-icon > svg,
.footer .footer-name > svg,
.footer .footer-icon > img,
.footer .footer-name > img {
  display: block;
  align-content: center;
  align-self: center;
  width: auto;
  height: 16px;
}
.footer .footer-icon ~ .footer-name {
  padding-left: 0;
}
.footer.footer-platform-darwin .footer-header {
  width: 100%;
  text-align: center;
  position: absolute;
  pointer-events: none;
}
.footer .footer-menu {
  display: flex;
  -webkit-app-region: no-drag;
}
.footer .footer-menu .footer-menu-item {
  min-width: 0;
  position: relative;
  cursor: pointer;
}
.footer .footer-menu .footer-menu-item button {
  border: none;
  box-shadow: none;
  background: transparent;
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  color: currentColor;
  font-size: 13px;
  padding: 0 10px;
  outline: none;
}
.footer .footer-menu .footer-menu-item button:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
.footer .footer-buttons {
  display: flex;
  flex-direction: row;
  flex-grow: 0;
  flex-shrink: 0;
  margin-left: auto;
}
.footer .footer-buttons button {
  -webkit-app-region: no-drag;
  display: inline-block;
  position: relative;
  width: 45px;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
  border: none;
  box-shadow: none;
  border-radius: 0;
  color: currentColor;
  background-color: transparent;
  line-height: 10px;
  outline: none;
}
.footer .footer-buttons button svg {
  fill: currentColor;
}
.footer .footer-buttons button:hover {
  background-color: rgba(0, 0, 0, 0.2);
  color: currentColor;
}
.footer .footer-buttons button.close:hover {
  background-color: #e81123;
  color: #fff;
}
.footer .footer-buttons-osx {
  display: flex;
  box-sizing: border-box;
  padding: 10px;
  width: 70px;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: center;
}
.footer .footer-buttons-osx .macButton {
  -webkit-app-region: no-drag;
  -webkit-box-sizing: border-box;
  border-radius: 50%;
  box-sizing: border-box;
  height: 12px;
  width: 12px;
  background-color: #dcdcdc;
  border-color: #d1d1d1;
}
.footer .footer-buttons-osx .macButton.macButtonClose {
  background-color: #fc615d;
}
.footer .footer-buttons-osx .macButton.macButtonMinimize {
  background-color: #fdbc40;
}
.footer .footer-buttons-osx .macButton.macButtonMaximize {
  background-color: #34c749;
}
.footer .footer-buttons-osx .macButton svg {
  display: block;
  visibility: hidden;
}
.footer .footer-buttons-osx:hover .macButton svg {
  visibility: visible;
}
</style>
