<script>
export default {
  props: {
    menu: { type: Array, required: true },
    close: { type: Function, required: true }
  }
}
</script>

<template>
  <nav class="menu">
    <ul v-if="!!menu">
      <li
        v-for="item in menu"
        :key="item.id">
        <router-link
          :to="{ name: item.name }" 
          @click.native="close">{{ item.label }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="postcss">
@import url(../assets/vars-color.css);

.menu {
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0;
  color: blue;
  font-weight: bold;
  & ul {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }
  & li {
    position: relative;
    display: block;
    margin-bottom: 12px;
    padding: 6px 0;
    & li {
      display: block;
      padding-left: 24px;
    }
  }
}
</style>
