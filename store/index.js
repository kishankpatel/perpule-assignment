import Vue from 'vue';
import Vuex from 'vuex';
import defaultData from '../Data';


Vue.use(Vuex);

export const state = () => (
  {
    feeds: []
  }
);

export const mutations = {
  setFeeds(state, feeds) {
    state.feeds = feeds
  }
};

export const actions = {
  loadFeeds({ commit }) {
    commit('setFeeds', defaultData);
  }
};

export const getters = {
  // services(state) {
  //   return state.services;
  // },
  // modifiers(state) {
  //   return state.modifiers;
  // },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
