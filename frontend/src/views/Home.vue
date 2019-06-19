
<script>
import gql from 'graphql-tag'
import ArticleList from '../components/ArticleList.vue'

export default {
  components: {
    ArticleList
  },
  apollo: {
    articles: gql`
      query getArticles {
        articles {
          id
          title
          imageUrl
          summary
          postedDate
          author {
            id
            name
          }
        }
      }
    `
  }
}
</script>

<template>
  <ArticleList
    v-if="!!articles"
    v-bind="{ articles, title: 'Recent Faker News' }"/>
</template>
