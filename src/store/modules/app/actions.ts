import { ActionTree } from 'vuex';
import axios from 'axios';
import { AppState } from './types';
import { RootState } from '../../types';
import { router } from '@/router';

export const actions: ActionTree<AppState, RootState> = {
    async isAuthenticated({ dispatch, commit }, { auth }): Promise<void> {
        commit('isAuthenticated', { auth });
    }    
};