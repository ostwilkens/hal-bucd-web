<template>
  <div class="post-card content-box" :class="{'post-card--has-poster' : post.poster, 'post-card--has-content' : post.description}">
    <div class="post-card__header">
      <iframe 
        v-if="post.video_url"
        width="100%" 
        height="483" 
        :src="'https://www.youtube-nocookie.com/embed/' + post.video_url + '?rel=0&amp;controls=1&amp&amp;showinfo=0&amp;modestbranding=0&amp;loop=1&amp;playlist=' + post.video_url" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
      <g-image
        alt="Cover image"
        v-else-if="post.cover_image"
        class="post-card__image"
        :src="post.cover_image"
      />
    </div>
    <div class="post-card__content" v-if="post.description">
      <h2 class="post-card__title" v-html="post.title" v-if="post.title" />
      <p class="post-card__description" v-html="post.description" />
      <g-link v-if="post.description" class="post-card__link" :to="post.path">Link</g-link>
    </div>
  </div>
</template>

<script>
import PostMeta from "~/components/PostMeta";

export default {
  components: {
    PostMeta
  },
  props: ["post"]
};
</script>

<style lang="scss">
iframe {
  margin-bottom: -5px;
}

.post-card {
  margin-bottom: var(--space);
  position: relative;
  // border: 1px solid var(--link-color);

  &__header {
    // margin-left: calc(var(--space) * -1);
    // margin-right: calc(var(--space) * -1);
    // margin-bottom: calc(var(--space) * 0.75);
    // margin-top: calc(var(--space) * -1);
    overflow: hidden;
    // border-radius: var(--radius) var(--radius) 0 0;

    &:empty {
      display: none;
    }
  }

  &__image {
    min-width: 100%;
    filter: grayscale(100%) contrast(120%) brightness(160%);
  }

  &__title {
    margin-top: 0;
  }

  &--has-content:hover {
    transform: scale(1.02);
    box-shadow: 1px 10px 30px 0 rgba(0, 0, 0, 0.1);
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }

  &__description {
    margin-bottom: 0;
  }

  &__content {
    padding: var(--space);
  }
}
</style>
