<script>
import CloseIcon from './IconClose'
import TheMenuNav from './TheMenuNav'
export default {
  components: {
    CloseIcon,
    TheMenuNav
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
      <TheMenuNav v-bind="{ menu, close }"/>
    </div>
  </transition>
</template>

<style module>
@import url(../assets/vars-color.css);

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
</style>
