<template>
  <div class="member">
    <g-image
      alt="Profile image"
      v-if="member.profile_image"
      :src="member.profile_image"
      class="member__image"
      width="180"
      height="180"
      blur="5"
    />

    <div>
      <h5 class="member__name" v-html="member.name" />
      <!-- <span class="member__skill" v-for="skill in member.skills" :key="skill.id" v-html="skill" /> -->
    </div>
  </div>
</template>

<page-query>
query Member ($id: ID!) {
  member: member (id: $id) {
    name,
    profile_image,
    skills,
  }
}
</page-query>

<script>
export default {
  props: ["member"]
};
</script>

<style lang="scss">
.member {
  display: flex;
  align-items: center;
  margin-bottom: 1em;

  @media screen and (min-width: 651px) {
    flex-direction: column;
    margin: 15px;
    text-align: center;
    width: 25vmin;
    max-width: 270px;
  }

  &__image {
    border-radius: 100%;
    border: 3px solid var(--body-color);
    margin-right: 0.8em;
    width: 25vmin;
    max-width: 200px;
    box-shadow: 0px 2px 15px 0 rgba(0, 0, 0, 0.1);

    @media screen and (min-width: 651px) {
      margin-left: 0.8em;
    }
  }

  &__name {
    margin: 0px;

    @media screen and (min-width: 651px) {
      margin-top: 20px;
    }
  }

  &__skill {
    display: block;
    margin-right: 5px;
  }
}
</style>
