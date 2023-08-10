import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoadingGender: false,
    genders: [],
    roles: [],
    positions: [],
    users: [],
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            //console.log('Check fetch reducer start', action);
            state.isLoadingGender = true;
            return {
                ...state,
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            //console.log('Check fecth reducer success ', action)
            state.genders = action.genders;
            state.isLoadingGender = false;
            return {
                ...state,
            }
        case actionTypes.FETCH_GENDER_FAILED:
            //console.log('Check fecth reducer failed ', action)
            state.isLoadingGender = false;
            return {
                ...state,
            }

        // Position
        case actionTypes.FETCH_POSITION_SUCCESS:
            state.positions = action.positions;
            return {
                ...state,
            }
        case actionTypes.FETCH_POSITION_FAILED:
            state.positions = []
            return {
                ...state,
            }

        // Role
        case actionTypes.FETCH_ROLE_SUCCESS:
            state.roles = action.roles;
            return {
                ...state,
            }
        case actionTypes.FETCH_ROLE_FAILED:
            state.roles = []
            return {
                ...state,
            }

        // Get user
        case actionTypes.GET_USER_SUCCESS:
            state.users = action.users;
            return {
                ...state,
            }
        case actionTypes.GET_USER_FAILED:
            state.users = [];
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default adminReducer;