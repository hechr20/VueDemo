import { MutationTree } from 'vuex';
import { AppState } from './types';

export const mutations: MutationTree<AppState> = {
  isAuthenticated(state, auth) {
    state.authenticated = auth;
  },
  setLeftSidebar(state: AppState) {
    if(state.authenticated=== false) {
        state.showLeftSidebar =false;
    } else{
      state.showLeftSidebar = !state.showLeftSidebar;
    }
}
};