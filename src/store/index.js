import { createApp } from "vue";
import { createStore } from "vuex";
// Create a new store instance.
const store = createStore({
  state: {
    games: [],
  },
  mutations: {
    increment(state, res) {
      state.games = res;
    },
  },
  actions: {
    a({ commit }) {fetch("https://gamerpower.p.rapidapi.com/api/giveaways", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "30c4474ee5mshe3de8d69ec67dacp1f8159jsn6b579788207d",
        "x-rapidapi-host": "gamerpower.p.rapidapi.com",
      },
    })
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((data) => {
        commit("increment", data);
      })
      .catch((err) => {
        console.error(err);
      });
    },
  },
});
export default store;