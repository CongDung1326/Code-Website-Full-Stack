import actionTypes from '../actions/actionTypes';

const initialState = {
    genders: [],
    roles: [],
    positions: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            console.log('Check fetch reducer start', action)
            return {
                ...state,
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            console.log('Check fecth reducer success ', action)
            let coppyState = { ...state };
            coppyState.genders = action.genders;
            return {
                ...coppyState,
            }
        case actionTypes.FETCH_GENDER_FAILED:
            console.log('Check fecth reducer failed ', action)
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default adminReducer;