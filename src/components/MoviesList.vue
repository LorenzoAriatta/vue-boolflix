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
        <p>{{ movie.original_language }}</p>
        <p>{{ movie.vote_average }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoviesList",
  props: {
    movie: Object,
    imgPath: String,
  },
};
</script>

<style scoped lang="scss">
.card {
  max-height: 550px;
}
img {
  position: relative;
}
.txt-card {
  position: absolute;
  color: white;
  top: 0%;
  left: 0%;
  padding: 1em;
}
</style>