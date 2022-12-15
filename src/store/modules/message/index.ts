import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { MessageState } from './types';
import { RootState } from '../../types';

export const state: MessageState = {
  type: null,
  message:null,
};

const namespaced: boolean = true;

export const message: Module<MessageState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};