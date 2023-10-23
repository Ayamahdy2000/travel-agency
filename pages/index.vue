<template>
  <navbar />
  <book-section />
  <blog />
</template>

<script>
import BookSection from '~/components/bookSection/bookSection.vue';
import navbar from "~/components/navbar/navbar.vue";
import blog from "~/components/blog/blog.vue"
export default {
  components: {
    navbar,
    BookSection,
    blog
  },
};
</script>
