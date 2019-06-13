<script>
import ArticleBody from './ArticleBody'
export default {
  components: {
    ArticleBody
  },
  props: {
    article: { type: Object, required: true }
  }
}
</script>

<template>
  <article :class="$style.article">
    <header class="meta">
      <h1
        :class="$style.headline"
        v-if="!!article.title"
      >
        {{ article.title }}
      </h1>
      <p
        :class="$style.author"
        v-if="!!article.author.name"
      >
        By
        <router-link :to="{ name: 'author', params: { authorId: article.author.id } }">
          {{ article.author.name }}
        </router-link>
      </p>
      <p
        v-if="article.postedDate"
        :class="$style.date">
        {{ article.postedDate | apDate }}</p>
    </header>
    <img
      v-if="article.imageUrl"
      :src="article.imageUrl"
      :class="$style.imageLead">
    <ArticleBody
      v-if="!!article.body"
      v-bind="{body: article.body}"/>
  </article>
</template>

<style module>
@import url(../assets/vars-include.css);

.article {
  margin: 0 16px 48px;
}
.meta {
  margin-bottom: 24px;
}
.headline {
  margin-bottom: 20px;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: -0.32px;
  font-weight: bold;
}
.author {
  margin: 0 0 6px;
  color: var(--color-link);
}
.date {
  margin: 0 0 16px;
}
.imageLead {
  margin-bottom: 24px;
  border-radius: 25px;
}

</style>
