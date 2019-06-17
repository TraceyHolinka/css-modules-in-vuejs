<script>
import TheMenu from './TheMenu'
import MenuIcon from './IconMenu'

export default {
  components: {
    TheMenu,
    MenuIcon
  },
  props: {
    menu: { type: Array, required: true }
  },
  data() {
    return {
      showHamburgerMenu: false
    }
  },
  methods: {
    closeHamburgerMenu() {
      this.showHamburgerMenu = false
      document.getElementById('hamburger-menu').classList.remove('menu-scroll')
      document.body.classList.remove('body-no-scroll')
    },
    openHamburgerMenu() {
      this.showHamburgerMenu = true
      document.getElementById('hamburger-menu').classList.add('menu-scroll')
      document.body.classList.add('body-no-scroll')
    }
  }
}
</script>

<template>
  <header :class="$style.header">
    <button
      aria-haspopup="true"
      aria-owns="hamburger-menu"
      type="button"
      :class="$style.button"
      @click="() => openHamburgerMenu()">
      <MenuIcon/>
    </button>
    <router-link
      :to="{ name: 'home'}"
      :class="$style.title">
      Faker News: The Real Fake News
    </router-link>
    <TheMenu
      v-show="showHamburgerMenu"
      id="hamburger-menu"
      :aria-hidden="!showHamburgerMenu"
      :menu="menu"
      :close="closeHamburgerMenu"/>
  </header>
</template>

<style module>
.header {
  display: flex;
  margin-bottom: 24px;
}
.title {
  margin: 0;
  color: var(--color-primary);
  font-size: 36px;
  line-height: 44px;
  letter-spacing: -0.64px;
  font-weight: bold;
  text-decoration: none;
}
.button {
  flex: 0 0 auto;
  width: 48px;
  height: 48px;
  margin: 0 24px 0 0;
  padding: 0;
  border: 0;
  outline: none;
  background: none;
  cursor: pointer;
}
</style>
