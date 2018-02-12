import {history} from '../helper/history.js';
const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';
const SET_USER_LIST_ERROR = 'SET_USER_LIST_ERROR';

function setLoginPending(isLoginPending) {
    return {
        type: SET_LOGIN_PENDING,
        isLoginPending
    };
}

function setLoginSuccess(isLoginSuccess) {
    return {
        type: SET_LOGIN_SUCCESS,
        isLoginSuccess
    };
}

function setLoginError(loginError) {
    return {
        type: SET_LOGIN_ERROR,
        loginError
    }
}

function setUserListError(userListError) {
    return {
        type: SET_USER_LIST_ERROR,
        userListError
    }
}

function callLoginApi(user, password, callback) {
    setTimeout(() => {
        if (user === 'frodo' && password === 'miprecioso') {
            return callback(null);
        } else {
            return callback(new Error('Invalid user and password'));
        }
    }, 1000);
}

export function login(user, password) {
    return dispatch => {
        dispatch(setLoginPending(true));
        dispatch(setLoginSuccess(false));
        dispatch(setLoginError(null));

        callLoginApi(user, password, error => {
            dispatch(setLoginPending(false));
            if (!error) {
                dispatch(setLoginSuccess(true));
                history.push('/');
            } else {
                dispatch(setLoginError(error));
            }
        });
    }
}

export function logout() {
    return dispatch => {
        dispatch(setLoginPending(false));
        dispatch(setLoginSuccess(false));
        dispatch(setLoginError(null));
        history.push('/logout');
    }
}

export default function reducer(state = {
    isLoginSuccess: false,
    isLoginPending: false,
    loginError: null,
    userListError: null
}, action) {
    switch (action.type) {
        case SET_LOGIN_PENDING:
            return Object.assign({}, state, {
                isLoginPending: action.isLoginPending
            });

        case SET_LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isLoginSuccess: action.isLoginSuccess
            });

        case SET_LOGIN_ERROR:
            return Object.assign({}, state, {
                loginError: action.loginError
            });
        case SET_USER_LIST_ERROR:
            return Object.assign({}, state, {
                userListError: action.userListError
            });

        default:
            return state;
    }
}