import { ActionTree } from 'vuex';
import axios from 'axios';
import { UsersState, Users } from './types';
import { RootState } from '../../types';
import { userDemoService } from '../../../services';
import { router } from '@/router';

export const actions: ActionTree<UsersState, RootState> = {
  // fetchData({ commit }): any {
  //   axios({
  //     url: 'https://...',
  //   }).then((response) => {
  //     const payload: User = response && response.data;
  //     commit('accountLoaded', payload);
  //   }, (error) => {
  //     console.log(error);
  //     commit('accountError');
  //   });
  // },
  getAll({ commit }) {
    commit('getAllRequest');

    userDemoService.getAll()
        .then(
            users => commit('getAllSuccess', users),
            error => commit('getAllFailure', error)
        );
  },
  async delete({ commit }, id:number) {
    commit('deleteRequest', id);

    await userDemoService.delete(id)
        .then(
            user => commit('deleteSuccess', id),
            error => commit('deleteFailure', { id, error: error.toString() })
        );
}
};