<template>
  <div class="w-full">
    <div class="box shadow">
      <h1>Hello</h1>
    </div>
    <div class="space-h"></div>

    <div class="content">
      <div class="box shadow w-full">
        <h1>Hellow World</h1>
      </div>
      <div class="space-v"></div>
      <div class="box shadow w-full">
        <h1>Hello</h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.space-h {
  padding: 0.1em;
}

.space-v {
  padding: 0.1em;
}

.box {
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.5rem;
}

.shadow {
  box-shadow: 0 0.05rem 0.3rem rgba(167, 167, 167, 0.15) !important;
}
</style>
