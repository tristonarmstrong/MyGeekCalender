import {axiosWithAuth as axios} from '../authentication/axiosAuth'

export const GET_DATA = 'GET_DATA'
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'
export const GET_DATA_FAIL = 'GET_DATA_FAIL'

export const POST_REMINDER = 'POST_REMINDER'
export const POST_REMINDER_SUCCESS = 'POST_REMINDER_SUCCESS'
export const POST_REMINDER_FAIL = 'POST_REMINDER_FAIL'

export const GET_REMINDERS = 'GET_REMINDERS'
export const GET_REMINDERS_SUCCESS = 'GET_REMINDERS_SUCCESS'
export const GET_REMINDERS_FAIL = 'GET_REMINDERS_FAIL'

export const DELETE_REMINDERS = 'DELETE_REMINDERS'
export const DELETE_REMINDERS_SUCCESS = 'DELETE_REMINDERS_SUCCESS'
export const DELETE_REMINDERS_FAIL = 'DELETE_REMINDERS_FAIL'

export const LOGIN = 'LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export const LOGOUT = 'LOGOUT'

export const REGISTER = 'REGISTER'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAIL = 'REGISTER_FAIL'


const route = 'https://mygeekcalender.herokuapp.com/api' // base route

export const getData = (path, page = 1) => dispatch => {
    dispatch({ type: GET_DATA })
    axios()
        .get(`${route}${path}${page}`)
        .then(res => {
            dispatch({ type: GET_DATA_SUCCESS, payload: res.data, page })
        })
        .catch(err => {
            dispatch({ type: GET_DATA_FAIL, payload: err })
        })
}

export const addReminder = (path, reminder) => dispatch => {
    dispatch({ type: POST_REMINDER })
    axios()
        .post(`${route}${path}`, reminder)
        .then(res => {
            dispatch({ type: POST_REMINDER_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: POST_REMINDER_FAIL, payload: err })
        })
}

export const getReminders = (path, id) => dispatch => {
    dispatch({ type: GET_REMINDERS })
    axios()
        .get(`${route}${path}${id}`)
        .then(res => {
            dispatch({ type: GET_REMINDERS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_REMINDERS_FAIL, payload: err })
        })
}

export const deleteReminder = (path, id) => dispatch => {
    dispatch({ type: DELETE_REMINDERS })
    axios()
        .delete(`${route}${path}${id}`)
        .then(res => {
            dispatch({ type: DELETE_REMINDERS_SUCCESS, payload: id })
        })
        .catch(err => {
            dispatch({ type: DELETE_REMINDERS_FAIL })
        })
}

export const login = (creds, token = '') => dispatch => {
    dispatch({type: LOGIN})
    console.log(creds)
    axios().post(`${route}/user/login${token}`, creds)
    .then(user => {
        //assumed and object is returned with user information
        //shape:
        /* {
            user_id,
            username,
            name,
            email,
            role
        } */
        console.log(user.data.user)
        localStorage.setItem('userToken', user.data.token)
        localStorage.setItem('user', user.data.user.username)
        dispatch({type: LOGIN_SUCCESS, payload: user.data.user})
    })
    .catch(err => {
        dispatch({type: LOGIN_FAIL, payload: err})
    })
}

export const logout = () => dispatch => {
    localStorage.removeItem('userToken')
    localStorage.removeItem('user')
    dispatch({type: LOGOUT})
}

export const registerUser = (creds) => dispatch => {
    dispatch({type: REGISTER})
    axios()
    .post(`${route}/user/register`, creds)
    .then(user => {
        dispatch({type: REGISTER_SUCCESS, payload: user.data})
    })
    .catch(err => {
        dispatch({type: REGISTER_FAIL, payload: err})
    })
}