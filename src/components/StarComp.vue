<template>
  <div class="d-flex">
    <h6 class="me-2"><strong>Voto:</strong></h6>
    <i
      v-for="index in starValue"
      :key="index"
      class="fa-solid fa-star me-2"
    ></i>
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

<style lang="scss" scoped>
i {
  color: yellow;
  font-size: 20px;
}
</style>