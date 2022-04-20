<template>
  <div>
    <MoviesList v-for="movie in movies" :key="movie.id" :movie="movie" />
    <SeriesList v-for="serie in series" :key="serie.id" :serie="serie" />
  </div>
</template>

<script>
import MoviesList from "@/components/MoviesList.vue";
import SeriesList from "@/components/SeriesList.vue";

export default {
  name: "MainComponent",
  props: {
    movies: Array,
    series: Array,
  },
  components: {
    MoviesList,
    SeriesList,
  },
};
</script>

<style scoped lang="scss">
</style>