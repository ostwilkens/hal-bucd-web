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
  },
  members: allMember(sortBy: "order", order: ASC) {
    edges {
      node {
        id
        name,
        profile_image (width: 194, height: 194, blur: 10, quality: 80),
        skills,
        order
      }
    }
  }
}
</page-query>

<script>
import Title from "~/components/Title.vue";
import PostCard from "~/components/PostCard.vue";
import Member from "~/components/Member.vue";

export default {
  components: {
    Title,
    PostCard,
    Member
  },
  metaInfo: {
    title: "Init"
  }
};
</script>

<style lang="scss">
.members {
  margin-bottom: 5em;

  @media screen and (min-width: 651px) {
    display: flex;
    justify-content: center;
  }
}
</style>