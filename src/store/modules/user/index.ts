import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { UsersState } from './types';
import { RootState } from '../../types';

export const state: UsersState = {
  users: [],
  error: '',
};

const namespaced: boolean = true;

export const users: Module<UsersState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};