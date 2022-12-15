import about from '../views/about.vue'
import dashboard from '../views/dashboard/dashboard.vue'
import registerUser from '../views/user/registerUser.vue'
import usersList from '../views/user/usersList.vue'
import main from '../views/main.vue'

declare global {
    interface RouterMeta {
        title: string;
    }
    interface Router {
        path: string;
        name: string;
        icon?: string;
        permission?: string;
        meta?: RouterMeta;
        component: any;
        children?: Array<Router>;
    }
    interface System {
        import(request: string): Promise<any>
    }
    var System: System
}

export const loginRouter: Router = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'LogIn'
    },
    component: () => import('../views/user/login.vue')
};
export const otherRouters: Router = {
    path: '/',
    name: 'main',
    permission: '',
    meta: { title: 'ManageMenu' },
    component: main,
    children: [
    ]
}
export const dashboardRouter: Router = {
    path: '/dashboard',
    name: 'dashboard',
    permission: '',
    meta: { title: 'Dashboard' },
    component: dashboard,
}
export const userRouter: Router = {
    path: '/registerUser',
    name: 'registerUser',
    permission: '',
    meta: { title: 'RegisterUser' },
    component: registerUser,
}
export const userListRouter: Router = {
    path: '/usersList',
    name: 'usersList',
    permission: '',
    meta: { title: 'User List' },
    component: usersList,
}
export const aboutRouter: Router = {
    path: '/about',
    name: 'about',
    permission: '',
    meta: { title: 'about' },
    component: about,
}
export const appRouters: Router = {
    path: '/setting',
    name: 'setting',
    permission: '',
    meta: { title: 'ManageMenu' },
    icon: '&#xe68a;',
    component: main,

    children: [
    ]
}
export const kanbanRouter: Router = {
    path: '/kanban',
    name: 'Kanban',
    meta: {
        title: 'Kanban card'
    },
    component: () => import('../views/kanban/kanbanCard.vue')
};

export const routers = [
    loginRouter,
    otherRouters,
    dashboardRouter,
    userRouter,
    userListRouter,
    aboutRouter,
    kanbanRouter
];
