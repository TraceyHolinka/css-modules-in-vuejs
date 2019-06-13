<template functional>
  <footer :class="$style.footer">
    <p>
      <router-link
        :to="{ name: 'home'}"
        class="site-title">
        Faker News
      </router-link>
      Storybook and Storyshot Testing Demo by <a href="https://github.com/TraceyHolinka/">Tracey Holinka</a>
    </p>
  </footer>
</template>

<style module>
.footer {
  margin: 36px auto 24px;
  font-weight: bold;
}
</style>
