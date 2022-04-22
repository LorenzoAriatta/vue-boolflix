<template>
  <div id="app">
    <HeaderComponent @search="searchedText" />
    <MainComponent :movies="movies" :series="series" />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import MainComponent from "@/components/MainComponenent.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    HeaderComponent,
    MainComponent,
  },
  data() {
    return {
      apiURL: "https://api.themoviedb.org/3/search/",
      query: "",
      series: [],
      movies: [],
    };
  },
  methods: {
    getMoviesApi() {
      this.getAPI("movie");
    },
    getSeriesApi() {
      this.getAPI("tv");
    },
    getAPI(type) {
      if (this.query.length > 0) {
        const params = {
          query: this.query,
          api_key: "2cc6fd43bbe95b9acd793c529dab5d34",
          language: "it-IT",
        };
        axios
          .get(this.apiURL + type, { params })
          .then((response) => {
            if (type == "movie" && response.status === 200) {
              console.log("array film", this.movies);
              this.movies = response.data.results;
            } else if (type == "tv" && response.status === 200) {
              console.log("array serie", this.series);
              this.series = response.data.results;
            }
            console.log(response.data.results);
            //console.log("ARRAY risultati ricerca", this.movies);
            //console.log(type);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    searchedText(textToSearch) {
      this.query = textToSearch;
      //console.log(this.query);
      this.getMoviesApi();
      this.getSeriesApi();
    },
  },
};
</script>

<style lang="scss">
@import "@/style/general.scss";

#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
