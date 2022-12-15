import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import {app} from './modules/app'
import {account} from './modules/account'
import {users} from './modules/user'
import {message} from './modules/message'
import { RootState } from './types';

const store = new Vuex.Store<RootState>({
    state: {
        version:""//
    },
    mutations: {
        //
    },
    actions: {

    },
    modules: {
        account,
        message,
        app,
        users,
    }
});

export default store;
