import { ActionTree } from 'vuex';
import axios from 'axios';
import { AccountState, User } from './types';
import { MessageState } from '../message/types';
import { RootState } from '../../types';
import { userDemoService } from '../../../services';
import { router } from '@/router';

export const actions: ActionTree<AccountState, RootState> = {
  fetchData({ commit }): any {
    axios({
      url: 'https://...',
    }).then((response) => {
      const payload: User = response && response.data;
      commit('accountLoaded', payload);
    }, (error) => {
      console.log(error);
      commit('accountError');
    });
  },
  async login({ dispatch, commit }, { username, password }): Promise<void> {
    commit('loginRequest', { username });
    
    dispatch("app/isAuthenticated", {loggedIn:true}, {root:true});
    dispatch("message/clear", null, {root:true});

    await userDemoService.login(username, password)
        .then(
            user => {
                commit('loginSuccess', user);
                router.push('/usersList');
            },
            error => {
                commit('loginFailure', error);
                dispatch('message/error', error, { root: true });
            }
        );
  },
  logout({ commit }) {
    userDemoService.logout();
    commit('logout');
  },
  async register({ dispatch, commit }, user): Promise<void> {
    commit('registerRequest', user);
    dispatch('message/clear');

    await userDemoService.register(user)
        .then(
            user => {
                commit('registerSuccess', user);
                router.push('/login');
                setTimeout(() => {
                    // display success message after route change completes
                    dispatch('message/success', 'Registration successful', { root: true });
                })
            },
            error => {
                commit('registerFailure', error);
                dispatch('message/error', error, { root: true });
            }
        );
  }
};