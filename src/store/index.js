import { createStore } from "vuex";

export default createStore({
  state: {
    characters: [], //se almacenan todos los personajes.
    charactersFilter: [], //filtar los pesonajes al consultar
  },
  mutations: {
    setCharacter(state, payload) {
      //metodo para llenado de arreglo de personajes "characters" a partir de la carga de peticion "payload"
      state.characters = payload;
    },
    setCharacterFilter(state, payload) {
      //metodo para llenado de arreglo de personajes "characters" a partir de la carga de peticion "payload" al filtar.
      state.charactersFilter = payload;
    },
  },
  actions: {
    async getCharacters({ commit }) {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        console.log(data);
        commit('setCharacter', data.results);
        commit('setCharacterFilter', data.results);
      } catch (error) {
        console.error(error);
      }
    },
    filterByStatus({ commit, state }, status) {
      const results = state.characters.filter((character) => {
        return character.status.includes(status);
      });
      commit('setCharacterFilter', results);
    },
    filterByName({ commit, state }, name) {
      const formatName = name.toLowerCase();
      const results = state.characters.filter((character) => {
        const characterName = character.name.toLowerCase();
        if (characterName.includes(formatName)) {
          return character;
        }
      });
      commit('setCharacterFilter', results);
    },
  },
  modules: {},
});
