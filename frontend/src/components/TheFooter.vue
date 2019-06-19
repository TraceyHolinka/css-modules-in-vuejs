<template functional>
  <footer :class="$style.footer">
    <p>
      <router-link :to="{ name: 'home'}">
        Faker News
      </router-link>
      CSS Modules in Vue.js Demo by <a href="https://github.com/TraceyHolinka/">Tracey Holinka</a>
    </p>
  </footer>
</template>

<style module>
.footer {
  composes: fontBase from "../assets/globals.css";
  margin: 48px auto 24px;
  font-weight: bold;
}
</style>
