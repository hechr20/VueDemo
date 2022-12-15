import { MutationTree } from 'vuex';
import { UsersState, Users } from './types';
import { User } from '../account/types';

export const mutations: MutationTree<UsersState> = {
  getAllRequest(state) {
    state.users = [];
  },
  getAllSuccess(state, users) {
    state.users = users;
  },
  getAllFailure(state, error) {
    state.error = error;
  },
  deleteRequest(state, id) {
    // add 'deleting:true' property to user being deleted
    state.users = state.users?.map(user =>
      user.id === id
          ? { ...user, deleting: true }
          : user
    )  
  },
  deleteSuccess(state, id) {
    // remove deleted user from state
    state.users = state.users?.filter(user => user.id !== id)
  },
  deleteFailure(state, { id, error }) {
    // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
    state.users?.map(user => {
      if (user.id === id) {
        // make copy of user without 'deleting:true' property
        const { deleting, ...userCopy } = user;
        // return copy of user with 'deleteError:[error]' property
        return { ...userCopy, deleteError: error };
      }

      return user;
    })
  },
};