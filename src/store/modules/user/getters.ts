import { GetterTree } from 'vuex';
import { UsersState, Users } from './types';
import { RootState } from '../../types';
import { User } from '../account/types'

export const getters: GetterTree<UsersState, RootState> = {
    getUser(state, id): User | undefined {
        let selectedUser = state.users?.map(user =>
            user.id === id
                ? { ...user, deleting: true }
                : user
        );

        if (selectedUser !== undefined) {
            return selectedUser[0];
        }
        else{
            return undefined;
        }
    },   
    getUsers(state): User[] {
        let users = JSON.parse(localStorage.getItem('users') || '[]');
        state.users= users;
        return state.users;
    },   
};