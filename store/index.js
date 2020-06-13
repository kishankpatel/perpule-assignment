import Vue from 'vue';
import Vuex from 'vuex';
import defaultData from '../Data';


Vue.use(Vuex);

export const state = () => (
  {
    feeds: [],
    searchQuery: '',
    sortBy: ''
  }
);

export const mutations = {
  setFeeds(state, feeds) {
    state.feeds = feeds
  },
  setSearchQuery(state, query) {
    state.searchQuery = query
  },
  setSortBy(state, value) {
    state.sortBy = value
  }
};

export const actions = {
  loadFeeds ({ commit }) {
    commit('setFeeds', defaultData);
  },
  updateSearchQuery ({ commit }, query) {
    commit('setSearchQuery', query);
  },
  updateSortBy ({ commit }, value) {
    commit('setSortBy', value);
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions
});
