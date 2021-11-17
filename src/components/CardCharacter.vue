<template>
  <div class="card bg-card-dark text-white" style="min-height: 500px">
    <img :src="character.image" class="card-img-top" :alt="character.name" />
    <div class="card-body">
      <h4 class="card-title">{{ character.name }}</h4>
      <p class="">
        <span>
          <i
            v-if="character.status == 'Alive'"
            class="fs-6 fas fa-circle status-alive"
          ></i>
          <i
            v-if="character.status == 'Dead'"
            class="fas fa-circle text-danger"
          ></i>
          <i
            v-if="character.status == 'unknown'"
            class="fas fa-circle text-warning"
          ></i>
          {{ character.status }} - {{ character.species }}
        </span>
      </p>
      <p>
        <span>Origen: {{ character.origin.name }} </span>
      </p>
      <p>
        <span>Locacion: {{ character.location.name }} </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["character"],
};
</script>

<style>
.status-alive {
  color: #7efa63;
}
.card{
  border-radius: 30px 30px 30px 30px !important;
}
.card-img-top{
  border-radius: 30px 30px 0px 0px !important;
}
.bg-card-dark {
  background-color: #3c3e44;
}
</style>