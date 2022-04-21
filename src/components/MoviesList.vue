<template>
  <div>
    <div class="card h-100">
      <img
        class="w-100 h-100"
        :src="imgPath + movie.poster_path"
        :alt="movie.title"
      />
      <div class="txt-card">
        <h3>{{ movie.title }}</h3>
        <h5>{{ movie.original_title }}</h5>
        <!-- <p>{{ movie.original_language }}</p> -->
        <gb-flag code="fr" size="medium" />
        <StarComp :vote="this.movie.vote_average" />
      </div>
    </div>
  </div>
</template>

<script>
import StarComp from "@/components/StarComp.vue";

export default {
  name: "MoviesList",
  data() {
    return {
      vote: "",
      star: "",
    };
  },
  components: {
    StarComp,
  },
  props: {
    movie: Object,
    imgPath: String,
  },
};
</script>

<style scoped lang="scss">
.card {
  max-height: 550px;
  border-radius: 5px;
}
img {
  position: relative;
  border-radius: 5px;
}
.txt-card {
  position: absolute;
  color: white;
  top: 0%;
  left: 0%;
  padding: 1em;
}
</style>