<template>
  <div class="card bg-card-dark text-white">
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
          {{ character.status }}
        </span>
      </p>
      <p>
        Origen:
        <strong> {{ character.origin.name }} </strong>
      </p>
      <p>
        Location:
        <strong> {{ character.location.name }} </strong>
      </p>
    </div>
    <div class="card-footer text-muted">
      <div class="text-center">
        <a
          class="link-info"
          data-bs-toggle="modal"
          :data-bs-target="'#characterInfo' + character.id"
          href="#"
          >More information</a
        >
      </div>
    </div>
  </div>
  <ModalCharacter :character="character" />
</template>

<script>
import ModalCharacter from "@/components/ModalCharacter";
export default {
  components: { ModalCharacter },
  props: ["character"],
};
</script>

<style>
.status-alive {
  color: #7efa63;
}
.card {
  min-height: 550px;
  border-radius: 30px 30px 30px 30px !important;
  transition: all 200ms;
}
.card:hover {
  border: 1px solid #7efa63 !important;
  box-shadow: 0px 0px 2px 3px #7ffa637e !important;
}

.card-img-top {
  border-radius: 30px 30px 0px 0px !important;
  transition: all 300ms;
}
.card-img-top:hover {
  border-radius: 30px 30px 30px 30px !important;
  -webkit-transform: scale(1.09);
  -moz-transform: scale(1.09);
  -ms-transform: scale(1.09);
  -o-transform: scale(1.09);
  transform: scale(1.09);
}
.bg-card-dark {
  background-color: #3c3e44;
}
.font-span {
  color: #dadada;

  font-size: 16px;
}
.link-info {
  color: #afafaf;
  text-decoration: none;
  font-size: 14px;
}
.link-info:hover {
  color: #7efa63;
}
.modal-header {
  border-bottom: 1px solid #575757;
}
.modal-content {
  border-radius: 30px;
}
.icon-close {
  color: #7efa63 !important;
  background-color: #7efa63 !important;
  border-radius: 30px;
}
.specie {
  color: #ff5e48;
}
.created {
  color: #ecbe00;
}
.gender-male {
  color: #00aeef;
}
.gender-female {
  color: #ef5ca2;
}
.number {
  color: #198754;
}
</style>