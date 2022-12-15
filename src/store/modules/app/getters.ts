import { GetterTree } from 'vuex';
import { AppState } from './types';
import { RootState } from '../../types';

export const getters: GetterTree<AppState, RootState> = {
    isAuthenticated(state): Boolean {
        const auth = state.authenticated;
    
        return auth;
      }
};