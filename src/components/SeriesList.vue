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
        <img
          :src="require(`@/assets/${serie.original_language}.png`)"
          :alt="serie.original_language"
        />
        <StarComp :vote="this.serie.vote_average" />
      </div>
    </div>
  </div>
</template>

<script>
import StarComp from "@/components/StarComp.vue";

export default {
  name: "SeriesList",
  components: {
    StarComp,
  },
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