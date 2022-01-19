<template>
  <nav>
    <ul>
      <router-link to="/">
        <li class="nav-button">Home</li>
      </router-link>
      <router-link to="/about">
        <li class="nav-button">About</li>
      </router-link>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppNavigation",
});
</script>

<style scoped>
nav {
  display: block;
  justify-content: center;
  padding: 0.6em;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  display: block;
  border-radius: 0.5em;
  margin-bottom: 0.5em;
  padding: 0.28em;
  transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 800ms;
  font-size: 0.8rem;
  font-weight: 600;
  color: #504e4e;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
}

.router-link-active li,
.router-link-exact-active li {
  background-color: #1366e2f8;
  color: #ffffffe3;
}

li:hover {
  background-color: #838383f8;
  color: #fafafae3;
}

a {
  text-decoration: none;
  color: #fff;
}

.nav-button {
  text-align: center;
}
</style>
