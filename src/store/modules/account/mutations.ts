import { MutationTree } from 'vuex';
import { AccountState, User } from './types';

export const mutations: MutationTree<AccountState> = {
  loginRequest(state, user) {
    state.loggedIn = true;
    state.user = user;
  },
  loginSuccess(state, user) {
    state.loggedIn = true;
    state.user = user;
  },
  loginFailure(state) {
    state.loggedIn = false;
    state.user = null;
  },
  logout(state) {
    state.loggedIn = false;
    state.user = null;
  },
  registerRequest(state, user) {
    state.loggedIn = true;
  },
  registerSuccess(state, user) {
    state.loggedIn = false;
  },
  registerFailure(state, error) {
    state.loggedIn = false;
  }
};