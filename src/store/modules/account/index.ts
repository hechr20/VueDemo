import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { AccountState } from './types';
import { RootState } from '../../types';

const userData = JSON.parse(localStorage.getItem('user') || '{}');

export const state: AccountState = {
  user: userData,
  error: false,
};

const namespaced: boolean = true;

export const account: Module<AccountState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};