<script>
import Avatar from './Avatar'

export default {
  components: {
    Avatar
  },
  props: {
    id: { type: Number, requried: true, default: null },
    name: { type: String, requried: true, default: null },
    avatarUrl: { type: String, requried: false, default: null },
    bio: { type: String, requried: true, default: null },
    showAvatar: { type: Boolean, requried: false, default: true }
  }
}
</script>

<template>
  <section :class="$style.authorBio">
    <h1 :class="$style.name">
      {{ name }}
    </h1>
    <div :class="$style.avatar">
      <Avatar v-if="!!showAvatar"/>
    </div>
    <p :class="$style.bio">
      {{ bio }}
    </p>
  </section>
</template>

<style module>
.authorBio {
  display: flex;
  flex-flow: column;
  align-items: center;
}
.name {
  composes: fontHeadingLg from "../assets/globals.css";
  margin: 0 0 24px;
}
.avatar {
  margin-bottom: 16px;
}
.bio {
  composes: fontBase from "../assets/globals.css";
  margin: 0 0 24px;
}
</style>
