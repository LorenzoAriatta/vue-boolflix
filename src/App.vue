<template>
  <div id="app">
    <HeaderComponent />
    <MainComponent />
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
      series: [],
      movies: [],
    };
  },
  methods: {
    getMovies() {},
    getAPI() {
      const params = {
        api_key: "2cc6fd43bbe95b9acd793c529dab5d34",
        language: "it-IT",
        query: "lo",
      };
      axios
        .get(this.apiURL + "movie", { params })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getAPI();
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
