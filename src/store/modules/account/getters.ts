import { GetterTree } from 'vuex';
import { AccountState, User } from './types';
import { RootState } from '../../types';

export const getters: GetterTree<AccountState, RootState> = {
  fullName(state): string {
    const { user } = state;
    const firstName = (user && user.firstName) || '';
    const lastName = (user && user.lastName) || '';
    return `${firstName} ${lastName}`;
  },
  firstName(state): string {
    const { user } = state;
    const firstName = (user && user.firstName) || '';
    return `${firstName}`;
  },
  lastName(state): string {
    const { user } = state;
    const lastName = (user && user.lastName) || '';
    return `${lastName}`;
  },
  getAccount(state): User | null {
    const user = state.user || null;

    return user;
  }
};