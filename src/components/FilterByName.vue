<template>
  <div class="input-group">
    <input
      type="seach"
      class="form-control bg-dark text-white border-input-seach"
      id="inlineFormInputGroupUsername"
      placeholder="Busca un personaje"
      v-model="name"
      v-on:keyup="filter()"
      autofocus
    />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "vue";
export default {
  setup() {
    const store = useStore();
    const name = ref("");
    const filter = () => {
      store.dispatch("filterByName", name.value);
    };
    return { name, filter };
  },
};
</script>

<style>
.border-input-seach {
  box-shadow: 0px 0px !important;
  border: 1px solid #bdbdbd;
}
.border-input-seach:focus {
  box-shadow: 0px 0px 2px 3px #7ffa637e !important;
  border: 1px solid #7efa63;
}
</style>