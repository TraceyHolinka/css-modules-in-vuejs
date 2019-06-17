<script>
import ArticleCard from '../components/ArticleCard.vue'

export default {
  components: {
    ArticleCard
  },
  props: {
    articles: { type: Array, required: true },
    title: { type: String, required: false, default: 'Recent Faker News' }
  }
}
</script>

<template>
  <section>
    <h1 :class="$style.heading">
      {{ title }}
    </h1>
    <section v-if="!!articles.length">
      <ArticleCard
        v-for="article in articles"
        v-bind="$attrs"
        :class="$style.card"
        :key="article.id"
        :article="article"/>
    </section>
    <section v-else>
      <p>There are no articles</p>
    </section>
  </section>
</template>

<style module>
.heading {
  font-size: 30px;
  line-height: 36px;
  letter-spacing: -0.64px;
  text-align: center;
  color: var(--color-secondary-accent);
}
.card:first-of-type {
  margin: 24px 0 0;
}
</style>
