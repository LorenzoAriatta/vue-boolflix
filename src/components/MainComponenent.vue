<template>
  <div class="container d-flex flex-wrap">
    <div class="row flex-wrap py-5">
      <h2 v-show="movies.length > 0">Films</h2>
      <MoviesList
        class="col-4 w-33 mb-4"
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
        :imgPath="linkImg"
      />
    </div>

    <div class="row flex-wrap py-5">
      <h2 v-show="series.length > 0">TV Series</h2>
      <SeriesList
        class="col-4 w-33 mb-4"
        v-for="serie in series"
        :key="serie.id"
        :serie="serie"
        :imgPath="linkImg"
      />
    </div>
  </div>
</template>

<script>
import MoviesList from "@/components/MoviesList.vue";
import SeriesList from "@/components/SeriesList.vue";

export default {
  name: "MainComponent",
  data() {
    return {
      linkImg: "https://image.tmdb.org/t/p/w342/",
    };
  },
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