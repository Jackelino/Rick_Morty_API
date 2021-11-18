<template>
  <div
    class="modal fade"
    :id="'characterInfo' + character.id"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content bg-card-dark">
        <div class="modal-header">
          <h5 class="modal-title text-white" id="exampleModalLabel">
            {{ character.name }}
          </h5>
          <button
            type="button"
            class="btn-close icon-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-white">
          <p>
            <strong><i class="fas fa-meteor specie"></i> Specie:</strong>
            {{ character.species }}
          </p>
          <p>
            <strong><i class="fas fa-clock created"></i> Created:</strong>
            {{ character.created }}
          </p>
          <p>
            <strong
              ><i
                v-if="character.gender == 'Male'"
                class="fas fa-mars gender-male"
              ></i
              ><i
                v-if="character.gender == 'Female'"
                class="fas fa-venus gender-female"
              ></i>
              Gender:</strong
            >
            {{ character.gender }}
          </p>
          <p>
            <strong><i class="fas fa-list-ol number"></i> No. episodes:</strong>
            {{ character.episode.length }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ["character"],
};
</script>

<style>
</style>