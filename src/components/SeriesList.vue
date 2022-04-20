<template>
  <div>
    <div class="card">
      <h3>{{ serie.name }}</h3>
      <h5>{{ serie.original_name }}</h5>
      <p>{{ serie.original_language }}</p>
      <p>{{ serie.vote_average }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SeriesList",
  props: {
    serie: Object,
  },
};
</script>

<style scoped lang="scss">
</style>