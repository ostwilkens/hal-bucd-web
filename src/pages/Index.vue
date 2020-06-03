<template>
  <Layout :show-logo="false">
    <Title :show-title="true" />

    <div class="posts">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        path
      }
    }
  }
}
</page-query>

<script>
import Title from "~/components/Title.vue";
import PostCard from "~/components/PostCard.vue";

export default {
  components: {
    Title,
    PostCard
  },
  metaInfo: {
    title: "Init"
  }
};
</script>
