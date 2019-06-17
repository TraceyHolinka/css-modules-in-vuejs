<script>
import Author from './Author.vue'

export default {
  components: {
    Author
  },
  props: {
    authors: { type: Array, required: true }
  }
}
</script>

<template>
  <div
    class="authors">
    <header>
      <h1 class="heading">Authors</h1>
    </header>
    <div
      v-for="author in authors"
      :key="author.id">
      <Author :author="author"/>
    </div>
  </div>
</template>

<style lang="postcss">
.authors {
  padding: 0 16px;

  & .heading {
    margin-bottom: 30px;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: -0.64px;
    text-align: center;
    color: var(--color-secondary-accent);
  }

  & div:not(:first-of-type) .author {
    margin-top: 48px;
  }

  & .article-list {
    & .heading {
    font-size: 24px;
    line-height: 29px;
    letter-spacing: -0.32px;
      text-align: left;
    }

    & .article-card {
      margin: 0;
    }
  }
}
</style>
