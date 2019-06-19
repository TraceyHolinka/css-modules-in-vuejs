<script>
import CloseIcon from './IconClose'
import TheMenuItem from './TheMenuItem'
export default {
  components: {
    CloseIcon,
    TheMenuItem
  },
  props: {
    menu: { type: Array, required: true },
    close: { type: Function, required: true }
  }
}
</script>

<template>
  <transition name="menu">
    <div
      v-click-outside="close"
      :class="$style.menu"
    >
      <div 
        :class="$style.closeIcon" 
        @click="close"
      >
      <CloseIcon/>
      </div>
      <nav :class="$style.nav">
        <ul
          v-if="!!menu"
          :class="$style.list"
        >
          <li
            v-for="item in menu"
            :key="item.id"
            :class="$style.item"
          >
          <TheMenuItem v-bind="{ item, close }"/>
          </li>
        </ul>
      </nav>
    </div>
  </transition>
</template>

<style module>
/* used with <transition> */
.menu-enter-active,
.menu-leave-active {
  transform: translateX(-100%);
}
.menu-enter,
.menu-leave-to {
  opacity: 0;
}
.menu {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 360px;
  height: 100%;
  padding: 24px 12px;
  background: var(--color-primary);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  transition: transform 0.3s;
}
.closeIcon {
  position: absolute;
  z-index: 1;
  right: 30px;
  width: 24px;
  height: 24px;
  fill: var(--color-dark);
  cursor: pointer;
}
.nav {
  composes: fontHeadingSm from "../assets/globals.css";
  color: var(--color-dark);
  font-weight: bold;
}
.list {
  margin: 0;
  padding: 0;
}
.item {
  margin: 0 0 12px;
  padding: 6px 0;
}
</style>
