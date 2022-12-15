import { authHeader } from '../demodata/auth-header';
import {User} from '../store/modules/account/types'
import AppConsts from '../lib/appconst'

export const userDemoService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};

function login(username:string, password:string) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${AppConsts.appBaseUrl}/users/authenticate`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // login successful if there's a jwt token in the response
            if (user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

async function register(user:User) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    console.log(AppConsts.appBaseUrl)

    return await fetch(`${AppConsts.appBaseUrl}/users/register`, requestOptions).then(handleResponse);
}

function getAll() {
    const requestOptions :RequestInit= {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${AppConsts.appBaseUrl}/users`, requestOptions).then(handleResponse);
}


function getById(id:string) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${AppConsts.appBaseUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function update(user:User) {
    const requestOptions :RequestInit = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${AppConsts.appBaseUrl}/users/${user.id}`, requestOptions).then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id:number) {
    const requestOptions :RequestInit = {
        method: 'DELETE',
        headers: authHeader()
    };
    
    let xx = JSON.parse(JSON.stringify(id));
    return fetch(`${AppConsts.appBaseUrl}/users/${xx.id}`, requestOptions).then(handleResponse);
}

function handleResponse(response:Response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}