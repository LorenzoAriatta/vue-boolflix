<template>
  <div id="app">
    <HeaderComponent @search="searchedText" />
    <MainComponent v-for="movie in movies" :key="movie.id" :movies="movies" />
  </div>
</template>

<script>
// 2cc6fd43bbe95b9acd793c529dab5d34 apiKey
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
    getAPI() {
      const params = {
        query: this.query,
        api_key: "2cc6fd43bbe95b9acd793c529dab5d34",
        language: "it-IT",
      };
      axios
        .get(this.apiURL + "movie", { params })
        .then((response) => {
          console.log(response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    searchedText(textToSearch) {
      this.query = textToSearch;
      console.log(this.query);
      this.getAPI();
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
