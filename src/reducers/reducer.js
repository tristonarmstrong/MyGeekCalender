import {
    GET_DATA,
    GET_DATA_SUCCESS,
    GET_DATA_FAIL,
    POST_REMINDER,
    POST_REMINDER_SUCCESS,
    POST_REMINDER_FAIL,
    GET_REMINDERS,
    GET_REMINDERS_SUCCESS,
    GET_REMINDERS_FAIL,
    DELETE_REMINDERS,
    DELETE_REMINDERS_SUCCESS,
    DELETE_REMINDERS_FAIL,
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from '../actions/actions'


const initialState = {
    data: [],
    page: 1,
    error: '',
    isFetching: false,
    isPosting: false,
    isDeleting: false,
    pagination: {
        active: 1,
        tabs: [1, 2, 3, 4, 5]
    },
    user: {
        loggedin: false,
        loggingin: false,
        name: null,
        user_id: null,
        email: null,
        role: null,
        username: null,
        reminders: []
    }

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case GET_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                data: action.payload,
                pagination: {
                    ...state.pagination,
                    active: action.page
                }
            }
        case GET_DATA_FAIL:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        case POST_REMINDER:
            return {
                ...state,
                isPosting: true,
                error: ''
            }
        case POST_REMINDER_SUCCESS:
            return {
                ...state,
                isPosting: false,
                error: '',
                user: {
                    ...state.user,
                    reminders: [...state.user.reminders, action.payload]
                }
            }
        case POST_REMINDER_FAIL:
            return {
                ...state,
                error: action.payload,
                isPosting: false
            }
        case GET_REMINDERS:
            return {
                ...state,
                isFetching: true
            }
        case GET_REMINDERS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                user: {
                    ...state.user,
                    reminders: action.payload,
                },
                error: ''
            }
        case GET_REMINDERS_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case DELETE_REMINDERS:
            return {
                ...state,
                isDeleting: true,
                error: ''
            }
        case DELETE_REMINDERS_SUCCESS:
            return {
                ...state,
                isDeleting: false,
                error: '',
                user: {
                    ...state.user,
                    reminders: state.user.reminders.filter(reminder => reminder.reminder_id != action.payload)
                }
            }
        case DELETE_REMINDERS_FAIL:
            return {
                ...state,
                isDeleting: false,
                error: action.payload
            }
        case LOGIN:
            return {
                ...state,
                user: {
                    ...state.user,
                    loggingin: true
                }
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    loggingin: false,
                    loggedin: true,
                    name: action.payload.name,
                    user_id: action.payload.user_id,
                    email: action.payload.email,
                    role: action.payload.role,
                    username: action.payload.username
                }
            }
        case LOGIN_FAIL:
            return {
                ...state,
                error: action.payload,
                user: {
                    ...state.user,
                    loggingin: false
                }
            }
        case LOGOUT:
            return {
                ...state,
                error: '',
                user: {
                    loggedin: false,
                    loggingin: false,
                    name: null,
                    user_id: null,
                    email: null,
                    role: null,
                    username: null,
                    reminders: []
                }
            }
        default:
            return state
    }
}

export default reducer