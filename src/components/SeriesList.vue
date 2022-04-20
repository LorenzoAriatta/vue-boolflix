<template>
  <div>
    <div class="card h-100">
      <img
        class="w-100 h-100"
        :src="imgPath + serie.poster_path"
        :alt="serie.name"
      />
      <div class="txt-card">
        <h3>{{ serie.name }}</h3>
        <h5>{{ serie.original_name }}</h5>
        <p>{{ serie.original_language }}</p>
        <p>{{ serie.vote_average }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SeriesList",
  props: {
    serie: Object,
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