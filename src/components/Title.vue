<template>
  <div class="title">
    <a href="/">
      <h1 v-if="showTitle" class="title__site-title">
        {{ $static.metadata.siteName }}
      </h1>
    </a>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  props: ["showTitle"]
};
</script>

<style lang="scss">
.title {
  // margin: 0 auto;
  text-align: center;
  padding: calc(var(--space) / 2) 0;

  &__image {
    // border-radius: 100%;
    border: 3px solid var(--body-color);
    width: 160px;
    height: 160px;
    margin-bottom: 1em;
    margin-left: 0.4em;
    margin-right: 0.4em;
  }

  &__logo {
    width: 8vmin;
    height: 8vmin;
    max-width: 40px;
    max-height: 40px;
    filter: #{"invert(var(--invert))"};
  }

  &__intro {
    opacity: 0.8;
  }

  &__site-title {
    display: inline-block;
    margin-bottom: 0px;
  }
}
</style>
