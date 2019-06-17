import { storiesOf } from '@storybook/vue'
import Author from '../components/Author.vue'
import Authors from '../components/Authors.vue'
import AuthorBio from '../components/AuthorBio.vue'

const author = {
  id: 0,
  name: 'Faker Author',
  avatarUrl: 'http://localhost:3000/assets/avatar.png',
  bio:
    'Et omnis consequatur quisquam eos. Rem voluptatem blanditiis non dolorum nihil vel laborum veniam. Consequuntur nam eligendi optio rerum aliquam ratione et qui. Nihil temporibus ut magni eveniet vel qui. Blanditiis nostrum provident voluptatem inventore sint architecto mollitia. Sit consequatur quaerat aspernatur consequatur vero fugit. Voluptas qui odio nobis cum dignissimos magnam molestiae. Nihil doloribus est temporibus mollitia quasi ipsa laudantium iusto.',
  articles: [
    {
      id: 0,
      imageUrl: 'http://localhost:3000/assets/animals1.jpg',
      postedDate: 'Fri Aug 17 2018 08:17:20 GMT-0400 (EDT)',
      title: 'Headline for Faker Article',
      summary: 'Quam sed est quis distinctio quia perspiciatis eum. Quisquam ab quo mollitia. Et ut et doloremque. Aut similique aut explicabo unde neque nobis voluptatem. Quis doloremque nostrum sint distinctio expedita error.'
    },
    {
      id: 0,
      imageUrl: 'http://localhost:3000/assets/animals1.jpg',
      postedDate: 'Fri Aug 17 2018 08:17:20 GMT-0400 (EDT)',
      title: 'Headline for Faker Article',
      summary: 'Quam sed est quis distinctio quia perspiciatis eum. Quisquam ab quo mollitia. Et ut et doloremque. Aut similique aut explicabo unde neque nobis voluptatem. Quis doloremque nostrum sint distinctio expedita error.'
    }
  ]
}

storiesOf('Authors', module)
.add('Author Page', () => ({
  components: { Author },
  template: '<Author :author="author"/>',
  data() {
    return {
      author
    }
  }
}))
.add('Author Bio',() => ({
    components: { AuthorBio },
    template: '<AuthorBio :id="author.id" :name="author.name" :avatar-url="author.avatarUrl" :bio="author.bio"/>',
    data() {
      return {
        author
      }
    }
  }),
  { notes: 'Used in Author View and Authors View.' }
)
.add('Author List', () => ({
  components: { Authors },
  template: '<Authors :authors="authors"/>',
  data() {
    return {
      authors: [author, author, author]
    }
  }
}))
