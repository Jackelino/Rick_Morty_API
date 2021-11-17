<template>
  <div class="filter">
    <ul class="nav">
      <li class="nav-item">
        <a v-on:click="filter('')" class="nav-link active" href="#">All</a>
      </li>
      <li class="nav-item">
        <a v-on:click="filter('Alive')" class="nav-link" href="#">Alive</a>
      </li>
      <li class="nav-item">
        <a v-on:click="filter('Dead')" class="nav-link" href="#">Dead</a>
      </li>
      <li class="nav-item">
        <a v-on:click="filter('unknown')" class="nav-link" href="#">Unknown</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const filter = (status) => {
      store.dispatch("filterByStatus", status);
    };
    return { filter };
  },
};
</script>
    
<style>

.filter {
  background-color: #3c3e44;
  border-radius: 10px;
  height: 41px;
}
.nav-link {
  color: #ececec;
}
.nav-link:hover {
  color: #7efa63;
}
.active {
  color: #7efa63;
}
.nav {
  align-content: center !important;
  align-items: center !important;
}
</style>