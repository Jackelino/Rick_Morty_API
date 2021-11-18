<template>
  <div class="container">
    <div class="components-body">
      <div v-if="characters != null" class="row">
        <div
          class="col-md-3 p-2"
          v-for="character in characters"
          :key="character.id"
        >
          <CardCharacter :character="character" />
        </div>
        <div class="row" v-if="characters == ''">
          <div class="col-lg-6">
            <div class="p-5">
              <div class="text-center">
                <h2 class="text-white">
                  Sorry, we couldn't find any results for your search.
                </h2>
                <span class="text-gren">try again</span>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="p-5">
              <div class="d-flex justify-content-center">
                <img
                  class="img-fluid"
                  src="../assets/image/error.png"
                  alt=""
                  width="150"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import CardCharacter from "@/components/CardCharacter";
export default {
  components: { CardCharacter },
  setup() {
    const store = useStore();
    const characters = computed(() => {
      return store.state.charactersFilter;
    });
    onMounted(() => {
      store.dispatch("getCharacters");
    });
    return {
      characters,
    };
  },
};
</script>

<style>
.components-body {
  padding-bottom: 60px;
  padding-top: 30px;
}
.text-gren {
  color: #7efa63;
}
</style>