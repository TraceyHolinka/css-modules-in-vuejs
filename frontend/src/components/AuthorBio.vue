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
  <section :class="$style.section">
    <h1 :class="$style.name">
      {{ name }}
    </h1>
    <div :class="$style.avatarWrapper">
      <Avatar
        v-if="!!showAvatar"
        :class="$style.avatar"
      />
    </div>
    <p :class="$style.bio">
      {{ bio }}
    </p>
  </section>
</template>

<style module>
.section {
  display: grid;
  grid-template-columns: 1fr repeat(3, 16px 1fr);
  grid-template-rows: auto;
}
.name,
.avatarWrapper,
.bio {
  grid-column: 1 / span 7;
}
.name,
.avatarWrapper {
  justify-self: center;
}
.name {
  grid-row: 1;
  justify-self: center;
  margin-bottom: 24px;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: -0.64px;
}
.avatarWrapper {
  grid-row: 2;
  margin-bottom: 16px;
}
.bio {
  grid-row: 3;
  margin-bottom: 36px;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0;
}
</style>
