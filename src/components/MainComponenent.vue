<template>
  <div>
    <MoviesList v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
</template>

<script>
import MoviesList from "@/components/MoviesList.vue";

export default {
  name: "MainComponent",
  props: {
    movies: Array,
  },
  components: {
    MoviesList,
  },
};
</script>

<style>
</style>