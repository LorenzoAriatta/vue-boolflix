<template>
  <div>
    <div class="card h-100">
      <img
        class="w-100 h-100 poster"
        :src="imgPath + serie.poster_path"
        :alt="serie.name"
      />
      <div class="txt-card">
        <h6><strong>Title:</strong> {{ serie.name }}</h6>
        <h6><strong>Original Title:</strong> {{ serie.original_name }}</h6>
        <StarComp :vote="this.serie.vote_average" class="stars" />
        <p>
          <strong>Language:</strong>
          <!-- {{ serie.original_language }} -->
          <img
            :src="require(`@/assets/${serie.original_language}.png`)"
            :alt="serie.original_language"
            class="ms-2"
          />
        </p>
        <h6 v-show="serie.overview.length > 0">
          <strong>Overview:</strong>
          <p class="overview">
            {{ serie.overview }}
          </p>
        </h6>
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
  border-radius: 5px;
  background-color: black;
}
.poster {
  position: relative;
  border-radius: 5px;
}
.txt-card {
  position: absolute;
  color: white;
  top: 0%;
  left: 0%;
  padding: 1em;
  display: none;
}
.overview {
  font-size: 14px;
  line-height: 17px;
  height: 374px;
  overflow: hidden;
}
.card:hover .txt-card {
  display: block;
}
.card:hover .poster {
  opacity: 20%;
}
</style>