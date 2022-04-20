<template>
  <div class="container-fluid bg-black py-3">
    <div class="row justify-content-around align-items-center">
      <div class="col-4"><h1 class="col-2">BOOLFLIX</h1></div>
      <div class="col-4 align-items-end text-end">
        <input
          type="text"
          @keyup.enter="getSearch"
          placeholder="Insert a title"
          v-model="textToSearch"
        />
        <button
          @click="getSearch"
          type="submit"
          class="btn-primary rounded-pill ms-2"
        >
          Search
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: {},
  data() {
    return {
      textToSearch: "",
    };
  },
  methods: {
    getSearch() {
      this.$emit("search", this.textToSearch);
    },
  },
};
</script>

<style scoped lang="scss">
h1 {
  color: #d10015;
  font-weight: 600;
  font-size: 50px;
}
</style>
