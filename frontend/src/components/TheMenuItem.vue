<script>
export default {
  props: {
    item: { type: Object, required: true },
    close: { type: Function, required: true }
  }
}
</script>

<template>
  <router-link
    class="menu-link"
    :to="{ name: item.name }" 
    @click.native="close"
  >
    {{ item.label }}
  </router-link>
</template>

<style lang="postcss">
.menu-link.router-link-exact-active {
  color: var(--rose-ebony)
}
</style>
