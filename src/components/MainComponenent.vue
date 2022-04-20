<template>
  <div>
    <MoviesList />
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