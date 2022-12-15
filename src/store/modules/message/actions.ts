import { ActionTree } from 'vuex';
import { MessageState } from './types';
import { RootState } from '../../types';


export const actions: ActionTree<MessageState, RootState> = {
  success({ commit }, message) {
    commit('success', message);
  },
  error({ commit }, message) {
    commit('error', message);
  },
  async clear({ commit }) {
    commit('clear');
  }
};