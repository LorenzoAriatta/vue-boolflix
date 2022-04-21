<template>
  <div>
    <i v-for="index in starValue" :key="index" class="fa-solid fa-star"></i>
  </div>
</template>

<script>
export default {
  name: "StarComponent",
  props: {
    vote: Number,
  },
  computed: {
    starValue() {
      const decimalVote = this.vote;
      const stars = Math.round(decimalVote / 2);
      return stars;
    },
  },
};
</script>

<style>
</style>