import { GetterTree } from 'vuex';
import { MessageState } from './types';
import { RootState } from '../../types';

export const getters: GetterTree<MessageState, RootState> = {
    message(state): string {
        const message = state.message || '';
        return `${message}`;
      },
};