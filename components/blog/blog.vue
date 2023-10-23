<template>
  <div class="container">
    <div class="blog">
          <h2 class="generic-title generic-title--white">{{ $t("Blog") }}</h2>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-12 m-b-24" v-for="i,index in 6" :key="index">
          <generic-card></generic-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import GenericCard from "../genericCard/genericCard.vue";

export default {
  components: {
    GenericCard,
  },
};
</script>
