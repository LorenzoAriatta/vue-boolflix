<template>
  <div>
    <div class="card">
      <img
        class="h-100 poster missImg"
        src="https://miro.medium.com/max/800/1*hFwwQAW45673VGKrMPE2qQ.png"
        alt=""
      />
      <img
        class="h-100 poster"
        :src="imgPath + movie.poster_path"
        :alt="movie.title"
      />
      <div class="txt-card">
        <h6 v-if="movie.title != movie.original_title">
          <strong>Title:</strong> {{ movie.title }}
        </h6>
        <h6><strong>Original Title:</strong> {{ movie.original_title }}</h6>
        <StarComp :vote="this.movie.vote_average" class="stars" />
        <p>
          <strong>Language:</strong>
          <!-- {{ movie.original_language }} -->
          <img
            :src="require(`@/assets/${movie.original_language}.png`)"
            :alt="movie.original_language"
            class="ms-2"
          />
        </p>
        <h6 v-show="movie.overview.length > 0">
          <strong>Overwiev:</strong>
          <p class="overview">
            {{ movie.overview }}
          </p>
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
import StarComp from "@/components/StarComp.vue";

export default {
  name: "MoviesList",
  components: {
    StarComp,
  },
  props: {
    movie: Object,
    imgPath: String,
  },
  methods: {
    getMovieId() {
      const id = this.movie.id;
      console.log("ID MOVIE ", id);
      this.$emit("getID", id);
    },
  },
  mounted() {
    this.getMovieId();
  },
};
</script>

<style scoped lang="scss">
.card {
  position: relative;
  height: 550px;
  border-radius: 5px;
  background-color: black;
}
.missImg {
  position: absolute;
  top: 0%;
  left: 0%;
  max-height: 305px;
}
.poster {
  border-radius: 5px;
  z-index: 1;
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
  transition: 0.4s;
  opacity: 15%;
  &.missImg {
    display: none;
  }
}
</style>
