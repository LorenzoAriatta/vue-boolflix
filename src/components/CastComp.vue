<template>
  <div>
    <h6><strong>Cast:</strong></h6>
    <p v-for="(actor, index) in actors" :key="index">{{ actors[0].name }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CastComp",
  props: {
    movie: Object,
    cast: Object,
  },
  data() {
    return {
      apiKey: "2cc6fd43bbe95b9acd793c529dab5d34",
      id: "",
      actors: [],
    };
  },
  mounted() {
    this.getId();
    this.getCastAPI();
  },
  methods: {
    getId() {
      this.id = this.movie.id;
      console.log(this.id);
    },
    getCastAPI() {
      const params = {
        api_key: this.apiKey,
        language: "it-IT",
      };
      axios
        .get(`https://api.themoviedb.org/3/movie/${this.id}/credits`, {
          params,
        })
        .then((response) => {
          //console.log(response.data.cast);
          this.actors = response.data.cast;
          console.log(this.actors);
        });
    },
  },
};
</script>

<style>
</style>