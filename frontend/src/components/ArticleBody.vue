<script>
export default {
  props: {
    body: { type: String, required: true }
  }
}
</script>

<template>
    <section
    class="body"
    v-html="body"/>
</template>

<style lang="postcss">
/* Styles markup delievered by GraphQL */
.body {
  & h2 {
    margin: 24px 0 16px;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: -0.32px;
    font-weight: bold;
  }
  & h3,
  & p {
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0;
  }
  & h3 {
    margin: 16px 0;
    font-weight: bold;
  }
  & p {
    margin: 0 0 16px;
  }
}
</style>
