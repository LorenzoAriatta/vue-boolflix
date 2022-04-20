<template>
  <div class="container">
    <div class="row justify-content-between align-items-center">
      <div class="col-2"><h1 class="col-2">BOOFLIX</h1></div>
      <div class="col-4">
        <input type="text" placeholder="Search" />
        <button type="submit" class="btn-primary">Cerca</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: {},
  methods: {
    textToSearch() {
      this.$emit("search");
    },
  },
};
</script>

<style scoped lang="scss">
</style>
