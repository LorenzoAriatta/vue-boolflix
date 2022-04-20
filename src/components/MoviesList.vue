<template>
  <div>
    <div class="card">
      <h3>{{ movie.title }}</h3>
      <h5>{{ movie.original_title }}</h5>
      <p>{{ movie.original_language }}</p>
      <p>{{ movie.vote_average }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoviesList",
  props: {
    movie: Object,
  },
};
</script>

<style scoped lang="scss">
</style>