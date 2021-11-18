<template>
  <div class="container">
    <div class="component-image">
      <div class="text-center pb-5">
        <img
          class="img-fluid"
          alt="Vue logo"
          src="./assets/image/logo.png"
          width="450"
        />
      </div>
    </div>
    <div class="component-title">
      <div class="text-center">
        <h1 class="text-white">Characters</h1>
      </div>
    </div>
    <div class="component-body">
      <div class="container">
        <div class="components-top">
          <div class="row row-cols-lg-auto g-3 align-items-center">
            <div class="col-lg-4">
              <FilterByStatus />
            </div>
            <div class="col-lg-8">
              <div class="d-flex justify-content-end">
                <div class="col-md-6">
                  <FilterByName />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ListCharacters />
    </div>
    <div class="component-footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import FilterByName from "./components/FilterByName.vue";
import FilterByStatus from "./components/FilterByStatus.vue";
import Footer from "./components/Footer.vue";
import ListCharacters from "./components/ListCharacters.vue";

export default {
  name: "App",
  components: {
    ListCharacters,
    Footer,
    FilterByStatus,
    FilterByName,
  },
};
</script>

<style lang="scss">
.components-top {
  padding-bottom: 30px;
  padding-top: 30px;
}
</style>
